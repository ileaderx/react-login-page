import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LanguageSwitcher from './components/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <Provider store={store}>
      <Router>
        <div>
          <LanguageSwitcher />
          <nav>
            <Link to="/signup">{t('signup')}</Link>  {/* Translated Sign Up */}
            <Link to="/login">{t('login')}</Link>    {/* Translated Login */}
          </nav>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
