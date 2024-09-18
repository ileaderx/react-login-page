import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import { login } from '../redux/actions/authActions';
import '../styles/LoginStyle.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(''); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login(username, password));
      setSuccess(result.message || t('Login successful')); 
      setError('');
      navigate('/welcome');
    } catch (err) {
      setError(err.message || t('Login failed'));
      setSuccess(''); 
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
            required
          />
        </div>
        <div>
          <label>{t('password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        {success && <div className="success-message">{success}</div>} {/* Display success message */}
        <button type="submit">{t('login')}</button>
      </form>
    </div>
  );
};

export default Login;
