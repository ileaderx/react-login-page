import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../types';

const API_URL = 'http://localhost:5000'; 

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/login`, { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    return response.data; 
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    throw new Error(error.response.data.message || 'Login failed'); 
  }
};

export const signUp = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/register`, { username, password });
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
