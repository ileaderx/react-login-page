// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if token exists

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
