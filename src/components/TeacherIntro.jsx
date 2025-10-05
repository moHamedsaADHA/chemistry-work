import React from 'react';

const TeacherIntro = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <section className="py-20 bg-[#f8fafc] dark:bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] dark:text-[#39ff14] mb-4">
            🧑‍🔬 تعريف معلم الكيمياء
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#39ff14] to-[#2ecc40] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-[#444] dark:text-[#39ff14] leading-relaxed">
              الأستاذ أيمن كمال هو مدرس مادة الكيمياء المتخصص، يشرح لطلاب الصف الأول والثاني والثالث الثانوي بأسلوب واضح وممتع يساعد على الفهم السهل والتفوق في الكيمياء.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 space-x-reverse text-primary-600 dark:text-primary-400">
                <span className="text-2xl">🧠</span>
                <span className="font-medium">خبرة في التدريس</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-secondary-600 dark:text-secondary-400">
                <span className="text-2xl">�</span>
                <span className="font-medium">نتائج متميزة</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse text-success-600 dark:text-success-400">
                <span className="text-2xl">⚡</span>
                <span className="font-medium">أسلوب مبتكر</span>
              </div>
            </div>
            
            <button 
              onClick={scrollToCourses} 
              className="bg-gradient-to-r from-[#39ff14] to-[#2ecc40] text-[#101010] px-8 py-3 rounded-xl font-semibold hover:from-[#2ecc40] hover:to-[#39ff14] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🧪 تعرف أكثر عن الكيمياء
            </button>
          </div>
          
          <div className="flex items-center justify-end animate-slide-down pr-8 lg:pr-16">
            <img 
              src="assets/chemistry.png"
              alt="صورة الكيمياء"
              className="w-[420px] h-[420px] object-cover object-center rounded-full shadow-lg border-4 border-[#39ff14]/40 dark:border-[#39ff14] transition-all duration-500 hover:scale-105"
              style={{background: 'rgba(255,255,255,0.85)'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherIntro;