import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reverseGradeMapping } from '../utils/gradeMapping.js';

const GradeProtectedRoute = ({ children }) => {
  // إلغاء جميع شروط الحماية
  return children;
};

export default GradeProtectedRoute;