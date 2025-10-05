import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  // إلغاء جميع شروط الحماية
  return children;
};

export default ProtectedRoute;