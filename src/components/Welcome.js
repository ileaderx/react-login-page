import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logout } from '../redux/actions/authActions';
import '../styles/WelcomePageStyle.css';

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    
    // Navigate back to the login page
    navigate('/');
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('welcomeMessage')}</p>
      <button onClick={handleLogout}>{t('logout')}</button> {/* Logout button */}
    </div>
  );
};

export default Welcome;
