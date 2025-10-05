import { apiGet, apiPost, apiPut, apiDelete } from './apiClient.js';

export const getCourses = async () => {
  return await apiGet('/api/courses/');
};

export const getCourseById = async (id) => {
  return await apiGet(`/api/courses/${id}`);
};

export const createCourse = async (courseData) => {
  return await apiPost('/api/courses/', courseData);
};

export const updateCourse = async (id, courseData) => {
  return await apiPut(`/api/courses/${id}`, courseData);
};

export const deleteCourse = async (id) => {
  return await apiDelete(`/api/courses/${id}`);
};

export const getInstructorCourses = async () => {
  return await apiGet('/api/courses/instructor');
};