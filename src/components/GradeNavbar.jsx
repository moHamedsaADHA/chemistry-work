import React from 'react';

const GradeNavbar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'lessons', label: 'الحصص', icon: '📚' },
    { id: 'schedule', label: 'الجدول الدراسي', icon: '📅' },
    { id: 'tasks', label: 'الواجبات', icon: '📝' },
    { id: 'materials', label: 'المواد التعليمية', icon: '📂' },
    { id: 'quizzes', label: 'الكوويزات', icon: '🧠' }
  ];

  return (
    <nav className="mb-8 border-b border-[#39ff14]/40 dark:border-[#39ff14] bg-[#101010] dark:bg-[#101010]">
      <div className="flex overflow-x-auto space-x-1 space-x-reverse">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`flex items-center space-x-2 space-x-reverse px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap bg-transparent ${
              activeTab === tab.id
                ? 'text-[#39ff14] border-[#39ff14] dark:text-[#39ff14] dark:border-[#39ff14]'
                : 'text-[#222] dark:text-[#39ff14]/70 border-transparent hover:text-[#39ff14] dark:hover:text-[#39ff14] hover:border-[#39ff14]/40 dark:hover:border-[#39ff14]/60'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default GradeNavbar;