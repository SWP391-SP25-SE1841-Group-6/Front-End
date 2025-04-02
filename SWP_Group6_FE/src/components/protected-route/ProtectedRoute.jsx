import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated } = useAuth();
  const userRole = localStorage.getItem('role');

  // Not authenticated or wrong role, redirect to homepage
  if (!isAuthenticated || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // Authenticated and correct role, show route content
  return <Outlet />;
};

export default ProtectedRoute;