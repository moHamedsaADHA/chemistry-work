import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero.jsx';
import TeacherIntro from '../components/TeacherIntro.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { fetchCourses } from '../redux/slices/coursesSlice.js';
import { gradeMapping } from '../utils/gradeMapping.js';

const Home = () => {
  const dispatch = useDispatch();
  const { list: courses, loading } = useSelector(state => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const grades = [
    'الصف الأول الثانوي',
    'الصف الثاني الثانوي',
    'الصف الثالث الثانوي'
  ];

  return (
    <div className="home bg-[#f8fafc] dark:bg-[#101010]">
      <Hero />
      <TeacherIntro />
      <section id="courses" className="py-20 bg-[#fff] dark:bg-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222] dark:text-[#39ff14] mb-4">
              🧪 الصفوف الدراسية للكيمياء
            </h2>
            <p className="text-lg text-[#444] dark:text-[#39ff14] max-w-2xl mx-auto">
              اختر صفك الدراسي وابدأ رحلة التعلم مع دروس الكيمياء التفاعلية
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#39ff14] to-[#2ecc40] mx-auto rounded-full mt-4"></div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#39ff14]"></div>
              <span className="mr-3 text-[#444] dark:text-[#39ff14]">جاري التحميل...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grades.map(grade => {
                const course = courses.find(c => c.grade === grade);
                return (
                  <CourseCard
                    key={grade}
                    grade={grade}
                    description={course?.description}
                    lessonCount={course?.lessonCount || 0}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;