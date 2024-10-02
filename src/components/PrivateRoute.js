import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const userRole = localStorage.getItem('userRole');
  
  // If the role doesn't match, redirect to login page
  if (userRole !== role) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
