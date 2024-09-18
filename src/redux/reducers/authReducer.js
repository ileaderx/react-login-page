import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types';

const initialState = {
  user: null,
  error: null, // Ensure error is part of the initial state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null, // Clear any previous errors on success
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload, // Store error message in state
      };
    case LOGOUT:
      return {
        ...state,
        user: null, // Clear user data
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
