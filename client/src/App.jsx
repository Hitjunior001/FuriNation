import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LiveChat from './components/LiveChatComponent'
import ProtectedRoute from './components/ProtectRouteComponent';
import "./App.css"



export default function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/livechat"
          element={
            <ProtectedRoute>
              <LiveChat /> 
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}
