import { store } from '../redux/store.js';
import { refreshToken, logout } from '../redux/slices/authSlice.js';

const BASE_URL = 'http://localhost:8000';

// Helper function to get current auth headers
function getAuthHeaders() {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

// Helper function to handle token refresh
async function handleTokenRefresh() {
  try {
    await store.dispatch(refreshToken()).unwrap();
    return true;
  } catch (error) {
    console.error('Token refresh failed:', error);
    store.dispatch(logout());
    window.location.href = '/login';
    return false;
  }
}

// Enhanced fetch function with retry logic for 401 responses
async function enhancedFetch(url, options = {}) {
  // First attempt
  let response = await fetch(url, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers
    }
  });

  // If 401 and we have a token, try to refresh it
  if (response.status === 401 && localStorage.getItem('authToken')) {
    const refreshSuccess = await handleTokenRefresh();
    
    if (refreshSuccess) {
      // Retry the request with new token
      response = await fetch(url, {
        ...options,
        headers: {
          ...getAuthHeaders(),
          ...options.headers
        }
      });
    }
  }

  return response;
}

export async function apiGet(path) {
  try {
    const response = await enhancedFetch(BASE_URL + path);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;
  }
}

export async function apiPost(path, body) {
  try {
    const response = await enhancedFetch(BASE_URL + path, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      const error = new Error(errorData.message || `HTTP ${response.status}`);
      error.response = { data: errorData, status: response.status };
      throw error;
    }
    
    return await response.json();
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
}

export async function apiPut(path, body) {
  try {
    const response = await enhancedFetch(BASE_URL + path, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      const error = new Error(errorData.message || `HTTP ${response.status}`);
      error.response = { data: errorData, status: response.status };
      throw error;
    }
    
    return await response.json();
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error;
  }
}

export async function apiDelete(path) {
  try {
    const response = await enhancedFetch(BASE_URL + path, {
      method: 'DELETE'
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error;
  }
}