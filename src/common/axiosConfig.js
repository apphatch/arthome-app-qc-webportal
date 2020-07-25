import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const api = () => {
  const root = JSON.parse(localStorage.getItem('persist:root'));
  let headers;
  if (root) {
    headers = JSON.parse(root.auth).headers;
  }

  const api = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers,
    withCredentials: true,
  });

  return api;
};

export default api;
