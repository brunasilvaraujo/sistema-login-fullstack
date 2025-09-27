import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use( (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use( (response) => {
  return response;
}, async (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    window.location.href = `${location.protocol}//${location.host}/login`;
  }
  return Promise.reject(error);
});