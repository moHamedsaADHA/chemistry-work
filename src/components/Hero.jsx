import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  
  const texts = [
  '🚀 منصة البداية',
  'تعلم الكيمياء مع الأستاذ أيمن كمال - خبرة في تدريس المرحلة الثانوية'
  ];

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isTyping) {
      // تأثير الكتابة - إضافة حرف واحد كل مرة
      if (charIndex < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100); // سرعة الكتابة
        
        return () => clearTimeout(timeout);
      } else {
        // انتهت الكتابة، انتظار ثم بدء المحو
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // وقت العرض
        
        return () => clearTimeout(timeout);
      }
    } else {
      // تأثير المحو - حذف حرف واحد كل مرة
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); // سرعة المحو (أسرع من الكتابة)
        
        return () => clearTimeout(timeout);
      } else {
        // انتهى المحو، انتقال للنص التالي
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
        setCharIndex(0);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-white dark:bg-[#101010]"
        style={{
          backgroundImage: 'url("/chemistry.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-[#101010]/90"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {}
        <div className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in min-h-[200px] flex items-center justify-center">
          <h1 className="text-center relative text-[#222] dark:text-[#39ff14]">
            {displayedText}
            <span className="typing-cursor text-[#39ff14]">|</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link 
            to="/register" 
            className="bg-[#39ff14] text-[#101010] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2ecc40] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🚀 سجل الآن
          </Link>
          <Link 
            to="/grades" 
            className="bg-white dark:bg-[#222]/40 text-black dark:text-[#39ff14] border-2 border-[#39ff14]/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#39ff14]/10 dark:hover:bg-[#39ff14]/30 transform hover:scale-105 transition-all duration-300"
          >
            <span className="text-black dark:text-[#39ff14]">📚 عرض الصفوف الدراسية</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;