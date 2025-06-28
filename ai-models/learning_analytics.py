import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

class LearningAnalytics:
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = KMeans(n_clusters=3)
    
    def analyze(self, student_data_path):
        """Analyze student learning patterns"""
        data = pd.read_csv(student_data_path)
        features = data[['time_spent', 'quiz_scores', 'engagement']]
        scaled = self.scaler.fit_transform(features)
        clusters = self.model.fit_predict(scaled)
        data['learning_profile'] = clusters
        return data
    
    def get_insights(self, data):
        """Generate actionable insights"""
        insights = []
        for profile in data['learning_profile'].unique():
            group = data[data['learning_profile'] == profile]
            insight = {
                'profile': int(profile),
                'avg_score': group['quiz_scores'].mean(),
                'recommendation': self._generate_recommendation(profile)
            }
            insights.append(insight)
        return insights
    
    def _generate_recommendation(self, profile):
        """Generate profile-specific recommendations"""
        recommendations = [
            "Focus on interactive learning modules",
            "Try spaced repetition techniques",
            "Work on practice problems daily"
        ]
        return recommendations[profile % len(recommendations)]