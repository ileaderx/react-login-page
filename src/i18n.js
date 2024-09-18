import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "username": "Username",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "login": "Login",
      "signup": "Sign Up",
      "Passwords do not match": "Passwords do not match"
    }
  },
  ar: {
    translation: {
      "username": "اسم المستخدم",
      "password": "كلمة المرور",
      "confirmPassword": "تأكيد كلمة المرور",
      "login": "تسجيل الدخول",
      "signup": "إنشاء حساب",
      "Passwords do not match": "كلمتا المرور غير متطابقتين"
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
