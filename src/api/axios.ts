import axios from 'axios';

export const backApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// 공통 인터셉터 설정
[backApi].forEach(api => {
  api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('access');
      if (token) {
        config.headers.access = token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
}); 