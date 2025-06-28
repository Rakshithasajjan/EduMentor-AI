const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Get user progress
router.get('/progress', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('progress learningPreferences');
    res.json(user);
  } catch (error) {
    console.error('Progress fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update learning preferences
router.put('/preferences', auth, async (req, res) => {
  try {
    const { subjects, difficulty, learningStyle } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          'learningPreferences.subjects': subjects,
          'learningPreferences.difficulty': difficulty,
          'learningPreferences.learningStyle': learningStyle
        }
      },
      { new: true }
    ).select('-password');

    res.json({ message: 'Preferences updated', user });
  } catch (error) {
    console.error('Preferences update error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recommended courses
router.get('/recommendations', auth, async (req, res) => {
  try {
    // This would typically use AI to generate recommendations
    const recommendations = [
      {
        id: '1',
        title: 'Full Stack JavaScript',
        description: 'Complete web development course',
        difficulty: 'intermediate',
        estimatedTime: '40 hours'
      },
      {
        id: '2',
        title: 'Machine Learning Basics',
        description: 'Introduction to ML concepts',
        difficulty: 'beginner',
        estimatedTime: '30 hours'
      }
    ];

    res.json(recommendations);
  } catch (error) {
    console.error('Recommendations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;