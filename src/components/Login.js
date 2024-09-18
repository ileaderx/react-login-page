import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) {
    return <h2>{t('welcome')}, {username}!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('username')}</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>{t('password')}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">{t('login')}</button>
    </form>
  );
};

export default Login;
