import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default {
  // AI Tutor Services
  askAI: (question) => axios.post(`${API_BASE_URL}/ai/ask`, { question }),
  getRecommendations: (userId) => axios.get(`${API_BASE_URL}/ai/recommend/${userId}`),

  // Learning Analytics
  getLearningAnalytics: (userId) => axios.get(`${API_BASE_URL}/analytics/${userId}`),
  submitFeedback: (data) => axios.post(`${API_BASE_URL}/feedback`, data),

  // Authentication
  login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),
  register: (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData),
};