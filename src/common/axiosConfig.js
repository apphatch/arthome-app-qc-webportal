import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const axiosConfiguration = () => {
  let headerParams;
  const root = JSON.parse(localStorage.getItem('persist:root'));
  let auth, token;
  if (root) {
    auth = root.auth
    if (auth) {
      token = JSON.parse(auth).token;
    }
  }

  if (token !== '') {
    headerParams = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    };
  } else {
    headerParams = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  const api = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: headerParams,
    withCredentials: true
  });

  return api;
};

export default axiosConfiguration();
