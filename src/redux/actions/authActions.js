import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../types';

const API_URL = 'http://localhost:5000'; 

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, { username, password });
    const data = response?.data;

    if (data?.user?.role) {  // Ensure role is defined
      localStorage.setItem('authToken', data.token);  // Store the JWT token
      localStorage.setItem('userRole', data.user.role);  // Store the user role
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      return data;
    } else {
      throw new Error('User role not found');  // Handle case where role is not returned
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data || 'Login failed' });
    throw new Error(error.response?.data?.message || 'Login failed'); 
  }
};


export const signUp = (username, password, role) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, { username, password, role });
    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    return response.data; 
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data });
    throw new Error(error.response.data.message || 'Sign-up failed'); 
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); 
  dispatch({ type: LOGOUT });
};
