const AIService = require('../services/aiService');

exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    const response = await AIService.getRecommendations(question);
    res.json({ answer: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.analyzeLearning = async (req, res) => {
  try {
    const { studentData } = req.body;
    const analysis = await AIService.analyzeLearning(studentData);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};