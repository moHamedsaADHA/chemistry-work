// Grade mapping للصفحات العامة (يستخدم في URLs)
const gradeMapping = {
  'الصف الأول الثانوي': '1st-secondary',
  'الصف الثاني الثانوي': '2nd-secondary',
  'الصف الثالث الثانوي': '3rd-secondary'
};

// Grade mapping للدروس (lessons API routes)
const lessonsGradeMapping = {
  'الصف الأول الثانوي': '1st-secondary',
  'الصف الثاني الثانوي': '2nd-secondary',
  'الصف الثالث الثانوي': '3rd-secondary'
};

// Grade mapping للمهام والكويزات (tasks & quizzes API routes)
const tasksQuizzesGradeMapping = {
  'الصف الأول الثانوي': 'first-secondary',
  'الصف الثاني الثانوي': 'second-secondary',
  'الصف الثالث الثانوي': 'third-secondary'
};

// Grade mapping للجداول (schedule API routes)
const scheduleGradeMapping = {
  'الصف الأول الثانوي': '1st-secondary',
  'الصف الثاني الثانوي': '2nd-secondary',
  'الصف الثالث الثانوي': '3rd-secondary'
};

const reverseGradeMapping = Object.fromEntries(
  Object.entries(gradeMapping).map(([key, value]) => [value, key])
);

export { 
  gradeMapping, 
  reverseGradeMapping,
  lessonsGradeMapping,
  tasksQuizzesGradeMapping,
  scheduleGradeMapping
};