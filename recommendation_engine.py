import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import pickle

class RecommendationEngine:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.model = None
        self.data = None

    def train(self, data_path):
        """Train the recommendation model"""
        self.data = pd.read_csv(data_path)
        self.model = self.vectorizer.fit_transform(self.data['content'])
        
    def recommend(self, query, n=5):
        """Get top n recommendations"""
        query_vec = self.vectorizer.transform([query])
        similarities = cosine_similarity(query_vec, self.model).flatten()
        indices = np.argsort(similarities)[-n:][::-1]
        return self.data.iloc[indices]

    def save_model(self, path):
        """Save trained model"""
        with open(path, 'wb') as f:
            pickle.dump({
                'vectorizer': self.vectorizer,
                'model': self.model,
                'data': self.data
            }, f)

    def load_model(self, path):
        """Load pre-trained model"""
        with open(path, 'rb') as f:
            saved = pickle.load(f)
            self.vectorizer = saved['vectorizer']
            self.model = saved['model']
            self.data = saved['data']