import axios from 'axios';

export const realEstateApi = axios.create({
  baseURL: process.env.REACT_APP_REAL_ESTATE_API_URL
});

export const exerciseApi = axios.create({
  baseURL: process.env.REACT_APP_EXERCISE_API_URL
});

export const communityApi = axios.create({
  baseURL: process.env.REACT_APP_COMMUNITY_API_URL
});

// 공통 인터셉터 설정
[realEstateApi, exerciseApi, communityApi].forEach(api => {
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