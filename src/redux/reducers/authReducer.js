const initialState = {
    isAuthenticated: false,
    user: null,
    users: JSON.parse(localStorage.getItem('users')) || [] // Load users from localStorage
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'LOGIN':
        const user = state.users.find(user => user.username === action.payload.username && user.password === action.payload.password);
        if (user) {
          return {
            ...state,
            isAuthenticated: true,
            user
          };
        } else {
          return state;
        }
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  };
  