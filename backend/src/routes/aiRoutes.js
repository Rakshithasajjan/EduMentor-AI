const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middleware/auth');

router.post('/ask', authMiddleware, aiController.askQuestion);
router.post('/analyze', authMiddleware, aiController.analyzeLearning);
router.get('/recommend/:userId', authMiddleware, aiController.getRecommendations);

module.exports = router;