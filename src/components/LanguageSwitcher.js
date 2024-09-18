import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSwitcherStyle.css"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher-container">
      {currentLanguage === 'en' && (
        <button className="language-button" onClick={() => changeLanguage('ar')}>عربى</button>
      )}
      {currentLanguage === 'ar' && (
        <button className="language-button" onClick={() => changeLanguage('en')}>English</button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
