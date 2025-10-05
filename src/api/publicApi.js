// Public API endpoints - لا تحتاج authentication
const API_BASE_URL = 'http://localhost:8000';

// Helper function for public API calls (no auth required)
const publicFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Public API Error for ${url}:`, error);
    throw error;
  }
};

// Public API functions
export const publicApi = {
  // Get all grades (public)
  getAllGrades: () => publicFetch('/grades'),
  
  // Get grade info (public)
  getGradeInfo: (gradeParam) => publicFetch(`/grades/${gradeParam}`),
  
  // Get public lessons for a grade
  getPublicLessonsByGrade: (gradeParam) => publicFetch(`/grades/${gradeParam}/lessons/public`),
  
  // Check if endpoint exists (for debugging)
  checkEndpoint: (endpoint) => publicFetch(endpoint),
};

export default publicApi;