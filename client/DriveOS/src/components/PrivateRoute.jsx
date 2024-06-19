// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Simple check for demonstration

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
