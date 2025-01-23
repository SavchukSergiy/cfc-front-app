import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Імпортуємо локалізаційні файли для різних мов
import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';

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
    },
    lng: "UA", // За замовчуванням вибираємо українську мову
    fallbackLng: "EN", // Якщо мова не знайдена, використовується англійська
    interpolation: {
      escapeValue: false, // Не обов'язково для React, оскільки React уже захищає від XSS
    },
  });

export default i18n;
