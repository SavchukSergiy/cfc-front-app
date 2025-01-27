import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Імпортуємо локалізаційні файли для різних мов
import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';
import translationPL from './locales/pl/translation.json';
import translationDE from './locales/de/translation.json';

const savedLanguage = localStorage.getItem('language') || 'UA';

i18n
  .use(initReactI18next) // Ініціалізація для React
  .init({
    resources: {
      EN: {
        translation: translationEN, // англійська мова
      },
      UA: {
        translation: translationUA, // українська мова
      },
      PL: {
        translation: translationPL,
      },
      DE: {
        translation: translationDE,
      },
    },
    lng: savedLanguage, // За замовчуванням вибираємо українську мову
    fallbackLng: "EN", // Якщо мова не знайдена, використовується англійська
    interpolation: {
      escapeValue: false, // Не обов'язково для React, оскільки React уже захищає від XSS
    },
  });

export default i18n;
