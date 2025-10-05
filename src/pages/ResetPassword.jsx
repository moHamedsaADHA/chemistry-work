import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { resetPassword } from '../api/auth.js';
import MathBackground from '../components/MathBackground.jsx';




const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('رمز إعادة التعيين غير صحيح أو مفقود');
    }
  }, [token]);

  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 8;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    
    return {
      isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
      errors: {
        minLength,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpecial
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      setError('رمز إعادة التعيين غير صحيح');
      return;
    }

    if (!password.trim()) {
      setError('كلمة المرور مطلوبة');
      return;
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setError('كلمة المرور لا تلبي المتطلبات المطلوبة');
      return;
    }

    if (password !== confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await resetPassword(token, password);
      setMessage(response.message || 'تم تغيير كلمة المرور بنجاح');
      
      // توجيه المستخدم لصفحة تسجيل الدخول بعد 3 ثواني
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (error) {
      console.error('Reset password error:', error);
      setError(error.message || 'حدث خطأ أثناء إعادة تعيين كلمة المرور');
    } finally {
      setIsLoading(false);
    }
  };

  const passwordValidation = validatePassword(password);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <span className="text-6xl">❌</span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">رابط غير صحيح</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              رابط إعادة تعيين كلمة المرور غير صحيح أو منتهي الصلاحية
            </p>
            <Link 
              to="/forgot-password" 
              className="inline-block mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              طلب رابط جديد
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 relative overflow-hidden">
      {/* خلفية الرياضيات */}
      <MathBackground />
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🔑</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إعادة تعيين كلمة المرور</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              أدخل كلمة المرور الجديدة
            </p>
          </div>

          {message && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400">
              <div className="flex items-center">
                <span className="text-lg ml-2">✅</span>
                <div>
                  <div>{message}</div>
                  <div className="text-sm mt-1">سيتم توجيهك لصفحة تسجيل الدخول...</div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400">
              <div className="flex items-center">
                <span className="text-lg ml-2">❌</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة المرور الجديدة
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:text-white"
                  placeholder="أدخل كلمة المرور الجديدة"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="text-gray-400 hover:text-gray-600">
                    {showPassword ? '👁️‍🗨️' : '👁️'}
                  </span>
                </button>
              </div>
              
              {/* مؤشرات قوة كلمة المرور */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex text-xs space-x-2">
                    <span className={`px-1 ${passwordValidation.errors.minLength ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordValidation.errors.minLength ? '✅' : '❌'} 8 أحرف على الأقل
                    </span>
                  </div>
                  <div className="flex text-xs space-x-2">
                    <span className={`px-1 ${passwordValidation.errors.hasUpper ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordValidation.errors.hasUpper ? '✅' : '❌'} حرف كبير
                    </span>
                    <span className={`px-1 ${passwordValidation.errors.hasLower ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordValidation.errors.hasLower ? '✅' : '❌'} حرف صغير
                    </span>
                  </div>
                  <div className="flex text-xs space-x-2">
                    <span className={`px-1 ${passwordValidation.errors.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordValidation.errors.hasNumber ? '✅' : '❌'} رقم
                    </span>
                    <span className={`px-1 ${passwordValidation.errors.hasSpecial ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordValidation.errors.hasSpecial ? '✅' : '❌'} رمز خاص
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:text-white"
                  placeholder="أعد إدخال كلمة المرور"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="text-gray-400 hover:text-gray-600">
                    {showConfirmPassword ? '👁️‍🗨️' : '👁️'}
                  </span>
                </button>
              </div>
              
              {confirmPassword && (
                <div className="mt-1 text-xs">
                  <span className={`${password === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                    {password === confirmPassword ? '✅ كلمات المرور متطابقة' : '❌ كلمات المرور غير متطابقة'}
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !passwordValidation.isValid || password !== confirmPassword}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-3"></div>
                  جاري التحديث...
                </div>
              ) : (
                'تحديث كلمة المرور'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              ← العودة لتسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;