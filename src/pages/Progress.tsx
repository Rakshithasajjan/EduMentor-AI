import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  ChartBarIcon, 
  TrophyIcon, 
  CalendarIcon,
  BookOpenIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Progress: React.FC = () => {
  const { user } = useAuth();
  
  const [timeFilter, setTimeFilter] = useState('week');

  const weeklyData = [
    { day: 'Mon', hours: 2.5, lessons: 3 },
    { day: 'Tue', hours: 1.8, lessons: 2 },
    { day: 'Wed', hours: 3.2, lessons: 4 },
    { day: 'Thu', hours: 2.1, lessons: 3 },
    { day: 'Fri', hours: 1.5, lessons: 2 },
    { day: 'Sat', hours: 4.0, lessons: 5 },
    { day: 'Sun', hours: 2.8, lessons: 3 }
  ];

  const skillsData = [
    { skill: 'JavaScript', progress: 85, color: '#3B82F6' },
    { skill: 'React', progress: 70, color: '#10B981' },
    { skill: 'Node.js', progress: 60, color: '#F59E0B' },
    { skill: 'Python', progress: 45, color: '#EF4444' },
    { skill: 'SQL', progress: 55, color: '#8B5CF6' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Speed Learner',
      description: 'Completed 10 lessons in one week',
      date: '2024-01-15',
      icon: '🚀',
      type: 'gold'
    },
    {
      id: 2,
      title: 'Consistent Learner',
      description: '7-day learning streak',
      date: '2024-01-10',
      icon: '🔥',
      type: 'gold'
    },
    {
      id: 3,
      title: 'Problem Solver',
      description: 'Solved 25 coding challenges',
      date: '2024-01-08',
      icon: '🧩',
      type: 'silver'
    },
    {
      id: 4,
      title: 'First Steps',
      description: 'Completed first lesson',
      date: '2024-01-01',
      icon: '👶',
      type: 'bronze'
    }
  ];

  const getAchievementBadgeColor = (type: string) => {
    switch (type) {
      case 'gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'silver': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'bronze': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
        <p className="text-gray-600">Track your learning journey and achievements</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Lessons</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-xs text-green-600">+3 this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <ClockIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">89.5h</p>
              <p className="text-xs text-green-600">+12.2h this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FireIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">12 days</p>
              <p className="text-xs text-green-600">Personal best!</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
              <p className="text-xs text-green-600">2 gold, 1 silver</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Learning Activity Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Learning Activity</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setTimeFilter('week')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    timeFilter === 'week' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setTimeFilter('month')}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    timeFilter === 'month' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Month
                </button>
              </div>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                    name="Study Hours"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skills Mastery</h2>
            <div className="space-y-4">
              {skillsData.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                    <span className="text-sm text-gray-500">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${skill.progress}%`,
                        backgroundColor: skill.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <TrophyIcon className="h-5 w-5 mr-2 text-yellow-500" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mr-3">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 text-sm">{achievement.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getAchievementBadgeColor(achievement.type)}`}>
                        {achievement.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{achievement.description}</p>
                    <p className="text-xs text-gray-400">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Goals */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-blue-500" />
              Weekly Goals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Complete 5 lessons</span>
                  <span className="text-sm text-gray-500">4/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Study 10 hours</span>
                  <span className="text-sm text-gray-500">8.5/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Maintain streak</span>
                  <span className="text-sm text-green-600">✓ Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Insights */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-3">📊 Learning Insights</h3>
            <div className="space-y-2 text-sm">
              <p>• You're most productive on weekends</p>
              <p>• JavaScript is your strongest skill</p>
              <p>• 15% improvement this week</p>
              <p>• On track to meet monthly goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;