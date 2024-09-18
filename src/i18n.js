import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "username": "Username",
      "password": "Password",
      "login": "Login"
    }
  },
  ar: {
    translation: {
      "username": "اسم المستخدم",
      "password": "كلمة المرور",
      "login": "تسجيل الدخول"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
