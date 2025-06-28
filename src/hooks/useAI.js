import { useState, useCallback } from 'react';
import api from '../services/api';

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const askQuestion = useCallback(async (question) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.askAI(question);
      setResponse(res.data.answer);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getRecommendations = useCallback(async (userId) => {
    setLoading(true);
    try {
      const res = await api.getRecommendations(userId);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, response, askQuestion, getRecommendations };
};