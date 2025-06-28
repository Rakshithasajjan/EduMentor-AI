import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure this path is correct
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AITutor from './components/AITutor';
import Progress from './pages/Progress';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tutor" element={<AITutor />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;