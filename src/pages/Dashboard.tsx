import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  ClockIcon, 
  TrophyIcon, 
  ChartBarIcon,
  PlayIcon,
  StarIcon,
  FireIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface LearningStats {
  completedLessons: number;
  totalStudyTime: number;
  currentStreak: number;
  skillsLearned: number;
}

interface Course {
  id: string;
  title: string;
  progress: number;
  nextLesson: string;
  difficulty: string;
  estimatedTime: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<LearningStats>({
    completedLessons: 24,
    totalStudyTime: 45,
    currentStreak: 7,
    skillsLearned: 12
  });

  const [currentCourses] = useState<Course[]>([
    {
      id: '1',
      title: 'Full Stack JavaScript',
      progress: 65,
      nextLesson: 'Node.js Fundamentals',
      difficulty: 'Intermediate',
      estimatedTime: '2h 30m'
    },
    {
      id: '2',
      title: 'Machine Learning Basics',
      progress: 30,
      nextLesson: 'Linear Regression',
      difficulty: 'Beginner',
      estimatedTime: '1h 45m'
    },
    {
      id: '3',
      title: 'Data Structures & Algorithms',
      progress: 45,
      nextLesson: 'Binary Trees',
      difficulty: 'Advanced',
      estimatedTime: '3h 15m'
    }
  ]);

  const [recentAchievements] = useState([
    { id: 1, title: 'Week Streak!', description: '7 days of consistent learning', icon: FireIcon },
    { id: 2, title: 'Quick Learner', description: 'Completed 5 lessons in one day', icon: StarIcon },
    { id: 3, title: 'Problem Solver', description: 'Solved 50 coding challenges', icon: TrophyIcon }
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600">Ready to continue your learning journey today?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed Lessons</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedLessons}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <ClockIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Study Time</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalStudyTime}h</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FireIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">{stats.currentStreak} days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Skills Learned</p>
              <p className="text-2xl font-bold text-gray-900">{stats.skillsLearned}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
              <Link 
                to="/tutor" 
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center"
              >
                Ask AI Tutor
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {currentCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">⏱️ {course.estimatedTime}</span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center text-sm">
                      <PlayIcon className="h-4 w-4 mr-1" />
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <achievement.icon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                to="/tutor" 
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                💬 Chat with AI Tutor
              </Link>
              <Link 
                to="/progress" 
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                📊 View Progress
              </Link>
              <button className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                🎯 Take Assessment
              </button>
            </div>
          </div>

          {/* Daily Goal */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Daily Goal</h3>
            <p className="text-sm opacity-90 mb-3">Complete 2 lessons today</p>
            <div className="bg-white bg-opacity-20 rounded-full h-2 mb-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-xs opacity-75">1 of 2 lessons completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;