import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // نموذج وهمي بدون اتصال بالباك اند
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(null);
      alert('تم تسجيل الدخول (وهمي)!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white dark:bg-[#101010] transition-colors duration-500">
      {/* جزيئات كيمياء متحركة */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="60" fill="#39ff14" fillOpacity="0.15">
            <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="600" r="40" fill="#39ff14" fillOpacity="0.12">
            <animate attributeName="r" values="40;60;40" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="400" r="30" fill="#39ff14" fillOpacity="0.10">
            <animate attributeName="r" values="30;50;30" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-white dark:bg-[#181818] rounded-2xl shadow-2xl p-8 border border-[#39ff14] dark:border-[#39ff14]">
          <div className="flex flex-col items-center mb-8">
            {/* أيقونة كيمياء متحركة */}
            <div className="animate-spin-slow mb-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#39ff14" strokeWidth="4" />
                <circle cx="24" cy="24" r="8" fill="#39ff14" fillOpacity="0.7" />
                <circle cx="36" cy="12" r="4" fill="#39ff14" fillOpacity="0.5" />
                <circle cx="12" cy="36" r="3" fill="#39ff14" fillOpacity="0.4" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#222] dark:text-[#39ff14]">تسجيل الدخول</h1>
            <p className="mt-2 text-[#444] dark:text-[#39ff14]">مرحباً بك في منصة الكيمياء الحديثة</p>
          </div>
          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-[#222] dark:text-[#39ff14] mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39ff14] focus:border-transparent transition-colors duration-200 border-gray-300 dark:border-[#39ff14] dark:bg-[#101010] dark:text-[#39ff14] text-[#222]"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-sm font-medium text-[#222] dark:text-[#39ff14] mb-2">كلمة المرور</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39ff14] focus:border-transparent transition-colors duration-200 border-gray-300 dark:border-[#39ff14] dark:bg-[#101010] dark:text-[#39ff14] text-[#222]"
                placeholder="أدخل كلمة المرور"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#39ff14] text-[#101010] py-3 px-4 rounded-lg font-bold hover:bg-[#222] hover:text-[#39ff14] focus:outline-none focus:ring-2 focus:ring-[#39ff14] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-[#222] dark:text-[#39ff14]">
              ليس لديك حساب؟ <Link to="/register" className="text-[#39ff14] hover:text-[#222] dark:text-[#39ff14] font-medium">سجل الآن</Link>
            </p>
            <p className="text-sm text-[#222] dark:text-[#39ff14]">
              <Link to="/forgot-password" className="text-[#39ff14] hover:text-[#222] dark:text-[#39ff14] font-medium">نسيت كلمة المرور؟</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;