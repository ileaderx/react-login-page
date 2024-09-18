import { type } from "@testing-library/user-event/dist/type";

export const signUp = (username, password) => {
    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    return {
      type: 'SIGNUP',
      payload: { username, password }
    };
  };
  
  export const login = (username, password) => {
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      return {
        type: 'LOGIN',
        payload: { username, password }
      };
    } else {
      alert('Invalid credentials');
      return {
        type: 'LOGIN_FAILED'
      };
    }
  };

  export const logout = () => {
    return{
      type: 'LOGOUT'
    } 
  };
  