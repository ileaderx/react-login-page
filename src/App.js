import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

function App() {
  return (
    <Provider store={store}>
      <div>
        <LanguageSwitcher />
        <Login />
      </div>
    </Provider>
  );
}

export default App;
