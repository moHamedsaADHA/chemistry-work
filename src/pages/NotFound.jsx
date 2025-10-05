import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#101010]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#39ff14] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#222] dark:text-[#39ff14] mb-4">الصفحة غير موجودة</h2>
        <p className="text-[#444] dark:text-[#39ff14] mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة ضمن منصة الكيمياء</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-[#39ff14] text-[#101010] rounded-lg hover:bg-[#2ecc40] transition-colors duration-200 font-medium"
        >
            العودة للرئيسية
          </Link>
        </div>
      </div>
  );
};

export default NotFound;