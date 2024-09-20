import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
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

      if (result && result.token) {
        localStorage.setItem('authToken', result.token);
        setSuccess(result.message || t('Login successful')); // Set success message
        setError(''); // Clear any existing errors
        navigate('/welcome'); // Navigate to the welcome page
      } else {
        throw new Error(t('Invalid credentials')); // If no token is returned, trigger the error case
      }
    } catch (err) {
      setError(err.message || t('Login failed')); // Set the error message
      setSuccess(''); // Clear any success messages
    }
  };

  return (
    <div className="login-container">
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      {success && <div className="success-message">{success}</div>} {/* Display success message */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>{t('username')}</label>
          <input
            type="text"
            placeholder={t('username')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t('password')}</label>
          <input
            placeholder={t('password')}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <nav className="nav-container">
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "nav-link signup active-link" : "nav-link signup")}
          >
            {t('dontHaveAccount')}
          </NavLink>
        </nav>
        <button type="submit">{t('login')}</button>
      </form>

    </div>
  );
};

export default Login;
