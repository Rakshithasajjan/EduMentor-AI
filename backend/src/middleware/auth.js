const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');

module.exports = (req, res, next) => {
  try {
    // 1. More secure token extraction
    const token = req.header('Authorization')?.split(' ')[1] || 
                 req.cookies?.accessToken || 
                 req.query?.token;

    if (!token) {
      throw createHttpError(401, 'Authorization token required');
    }

    // 2. Verify with explicit algorithm and better error handling
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'], // Explicit algorithm specification
      maxAge: process.env.JWT_EXPIRES_IN || '1h'
    });

    // 3. Enhanced payload validation
    if (!decoded.userId || !decoded.role) {
      throw createHttpError(401, 'Invalid token payload');
    }

    // 4. Attach complete user context
    req.user = {
      id: decoded.userId,
      role: decoded.role,
      ...(decoded.sessionId && { sessionId: decoded.sessionId })
    };

    // 5. Refresh token logic (optional)
    if (decoded.exp - Date.now() / 1000 < 1800) { // 30 minutes remaining
      res.set('X-Token-Refresh', 'true');
    }

    next();
  } catch (error) {
    // 6. Better error classification
    const message = error.name === 'JsonWebTokenError' 
      ? 'Invalid token' 
      : error.name === 'TokenExpiredError'
        ? 'Token expired'
        : error.message;

    console.error('Auth Error:', {
      error: message,
      path: req.path,
      ip: req.ip
    });

    if (error.name === 'TokenExpiredError') {
      return next(createHttpError(401, 'Token expired', { code: 'TOKEN_EXPIRED' }));
    }
    
    next(createHttpError(401, message, { code: 'AUTH_FAILED' }));
  }
};