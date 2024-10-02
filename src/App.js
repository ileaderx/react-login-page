import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import AdminDashboard from './components/AdminDashboard';
import LanguageSwitcher from './components/LanguageSwitcher';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProtectedRoute from './components/ProtectedRoute';
import PrivateRoute from './components/PrivateRoute';
import './i18n';
import './styles/NavSwitcherStyle.css'; // Import your styles

function App() {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <Router>
        <div>
          <LanguageSwitcher />

          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/admin-dashboard" element={<PrivateRoute component={AdminDashboard} role="admin" />} />
            <Route path="/welcome" element={<PrivateRoute component={Welcome} role="user" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
