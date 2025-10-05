import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gradeMapping } from '../utils/gradeMapping.js';
import { canUserAccessGrade, getGradeAccessMessage } from '../utils/permissions.js';

const CourseCard = ({ grade, description, lessonCount = 0 }) => {
  const gradeSlug = gradeMapping[grade];
  
  // دالة للحصول على صورة كيمياء موحدة لكل صف
  const getGradeImage = (grade) => {
  return 'assets/chemistry.png';
  };

  return (
    <div className="group [perspective:1200px]">
      <div className="relative h-80 w-full rounded-2xl shadow-lg border border-[#ccc] dark:border-[#39ff14] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* الوجه الأمامي */}
        <div className="absolute inset-0 bg-[#fff] dark:bg-[#222] rounded-2xl overflow-hidden [backface-visibility:hidden] flex flex-col">
          <div className="relative h-full overflow-hidden">
            <img 
              src={getGradeImage(grade)} 
              alt={grade}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 z-0"
              style={{borderRadius: '1rem'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 to-transparent"></div>
            {/* مؤشر الحالة في الأعلى */}
            {/* تم إلغاء شرط الحماية، يمكن إظهار أي حالة أو إخفاؤها */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-[#39ff14] mb-1">{grade}</h3>
              <div className="flex items-center space-x-2 space-x-reverse text-[#39ff14]/80">
                <span className="text-lg">🧪</span>
                <span className="text-sm">كيمياء - مرحلة ثانوية</span>
              </div>
            </div>
            {/* زر الدخول يظهر دائماً في الأسفل */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
              <div className="w-[90%]">
                <Link 
                  to={`/grades/${gradeSlug}`}
                  className="w-full bg-gradient-to-r from-[#39ff14] to-[#2ecc40] text-black py-2 px-4 rounded-xl font-semibold hover:from-[#2ecc40] hover:to-[#39ff14] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 space-x-reverse text-sm"
                >
                  <span>�</span>
                  <span>دخول للصف</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* الوجه الخلفي */}
        <div className="absolute inset-0 bg-[#101010] rounded-2xl overflow-y-auto [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center p-6">
          <p className="text-[#39ff14] mb-4 leading-relaxed text-center font-bold text-lg">
            {description || `دروس شاملة في مادة الكيمياء ${grade} مع شرح مفصل وأمثلة تطبيقية وتطبيقات عملية في الكيمياء الحديثة.`}
          </p>
          <div className="w-full mt-2 flex justify-center absolute bottom-2 left-0 right-0">
            <div className="w-[90%]">
              <Link 
                to={`/grades/${gradeSlug}`}
                className="w-full bg-gradient-to-r from-[#39ff14] to-[#2ecc40] text-[#101010] py-2 px-4 rounded-xl font-semibold hover:from-[#2ecc40] hover:to-[#39ff14] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 space-x-reverse text-sm"
              >
                <span>📚</span>
                <span>دخول للصف</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;