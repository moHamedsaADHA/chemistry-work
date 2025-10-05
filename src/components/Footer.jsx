import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className="bg-[#1010] text-[#39ff14] py-12 dark:bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
                         {/* تم حذف لوجو البداية */}

              <h3 className="text-2xl font-bold">منصة للكيمياء</h3>
            </div>
            <p className="mb-4 leading-relaxed text-black dark:text-white">
            منصة تعليمية متخصصة في تدريس مادة الكيمياء للمرحلة الثانوية مع الأستاذ أيمن كمال. نقدم تعليماً عالي الجودة بأسلوب مبتكر وممتع.
            </p>
            <div className="flex space-x-4 space-x-reverse">
            
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">🔗 الروابط السريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/grades" className="text-black dark:text-[#39ff14] hover:text-white transition-colors duration-200 flex items-center space-x-2 space-x-reverse">
                  <span className="text-black dark:text-[#39ff14]">📚</span>
                  <span className="text-black dark:text-[#39ff14]">الصفوف الدراسية</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-black dark:text-[#39ff14] hover:text-white transition-colors duration-200 flex items-center space-x-2 space-x-reverse">
                  <span className="text-black dark:text-[#39ff14]">👤</span>
                  <span className="text-black dark:text-[#39ff14]">الملف الشخصي</span>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-black dark:text-[#39ff14] hover:text-white transition-colors duration-200 flex items-center space-x-2 space-x-reverse">
                  <span className="text-black dark:text-[#39ff14]">⚙️</span>
                  <span className="text-black dark:text-[#39ff14]">الإعدادات</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-[#39ff14]">📞 تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse text-gray-300">
                <span className="text-lg"></span>
               
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-black dark:text-[#39ff14]">
                <span className="text-lg text-black dark:text-[#39ff14]">📞</span>
                <div>
                  <div className="text-sm text-black dark:text-[#39ff14]">الهاتف</div>
                  <div className="text-black dark:text-[#39ff14]">01092731005</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse text-black dark:text-[#39ff14]">
                <span className="text-lg text-black dark:text-[#39ff14]">📍</span>
                <div>
                  <div className="text-sm text-black dark:text-[#39ff14]">العنوان</div>
                  <div className="text-black dark:text-[#39ff14]">قنا مركز نقاده</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-black dark:text-[#39ff14] text-center md:text-right">
                &copy; 2025 منصة البداية للكيمياء. جميع الحقوق محفوظة.
              </p>
            </div>
            {/* عبارة الإنشاء وروابط LinkedIn */}
            <div className="mt-6 text-center text-black dark:text-[#39ff14] text-sm">
              تم إنشاء المنصة بواسطة:
              <a
                href="https://www.linkedin.com/in/mohamed-saad-b33767320/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 text-[#39ff14] hover:text-[#2ecc40] underline"
              >
                محمد سعد
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
