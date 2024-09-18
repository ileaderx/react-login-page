import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import LanguageSwitcher from './components/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './styles/NavSwitcherStyle.css'; // Import your styles

function App() {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <Router>
        <div>
          <LanguageSwitcher />
          <nav className="nav-container">
            <NavLink 
              to="/signup" 
              className={({ isActive }) => (isActive ? "nav-link signup active-link" : "nav-link signup")}
            >
              {t('signup')}
            </NavLink>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "nav-link login active-link" : "nav-link login")}
            >
              {t('login')}
            </NavLink>
          </nav>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} /> {/* Welcome page */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
