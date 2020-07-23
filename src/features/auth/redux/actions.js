import api from '../../../common/axiosConfig';
import { request, success, failure } from '../../../common/reduxActions';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
} from './constants';
import history from '../../../common/history';

const login = data => {
  return dispatch => {
    dispatch(request(AUTH_LOGIN_REQUEST));
    return api
      .post('login', data)
      .then(res => {
        const data = { user: res.data, token: res.headers['x-csrf-token'] };
        dispatch(success(AUTH_LOGIN_SUCCESS, data));
        history.go('/');
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};

const logout = () => {
  return dispatch => {
    return api
      .get('logout')
      .then(res => {
        console.log(res);
        const data = {};
        dispatch(success(AUTH_LOGOUT, data));
        window.location.reload(false);
      })
      .catch(error => {
        const { status } = error.response;
        if (status === 401) {
          localStorage.removeItem('persist:root');
          history.go('/auth/login');
        }
      });
  };
};

const register = data => {
  return dispatch => {
    return api
      .post('users', data)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};

const getUserDetails = () => {
  return dispatch => {
    return api
      .get('users')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};

const authActions = {
  login,
  logout,
  register,
  getUserDetails,
};

export default authActions;