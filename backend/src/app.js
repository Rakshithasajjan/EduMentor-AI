// backend/src/app.js
import cors from 'cors';
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  
}));