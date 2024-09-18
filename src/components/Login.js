import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../redux/actions/authActions';
import '../styles/LoginStyle.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle error message
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Use optional chaining to avoid reading undefined
  const loginError = useSelector((state) => state.auth?.error); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError(''); // Clear previous error

    // Dispatch login action
    const success = await dispatch(login(username, password));

    if (success) {
      navigate('/welcome'); // Navigate on successful login
    } else {
      setError(t('invalidCredentials')); // Set error message if login fails
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>{t('username')}</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>{t('password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && <div className="error-message">{loginError}</div>} {/* Display error */}
        <button type="submit">{t('login')}</button>
      </form>
    </div>
  );
};

export default Login;
