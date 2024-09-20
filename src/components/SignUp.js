import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { signUp } from '../redux/actions/authActions';
import '../styles/SignUpStyle.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(t('Passwords do not match'));
      return;
    }

    try {
      const result = await dispatch(signUp(username, password));
      setSuccess(result.message || t('Sign up successful'));
      setError('');
    } catch (err) {
      setError(err.message || t('Sign up failed'));
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      {success && <div className="success-message">{success}</div>} {/* Display success message */}
      <form className="signup-form" onSubmit={handleSubmit}>
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
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t('confirmPassword')}</label>
          <input
            type="password"
            placeholder={t('confirmPassword')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <nav className="nav-container">
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "nav-link login active-link" : "nav-link login")}
            >
              {t('haveAccount')}
            </NavLink>
          </nav>
        <button type="submit">{t('signup')}</button>
      </form>
    </div>
  );
};

export default SignUp;
