// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Your translation files (add more languages as needed)
// const resources = {
//   en: {
//     translation: {
//         "home": "Home",
//         "candidates": "Candidates",
//         "employers": "Employers",
//         "aboutUs": "About Us",
//         "news": "News",
//         "applicationAssistant": "Application Assistant",
//         "testPage": "Test Page"},
//   },
//   de: {
//     translation: {
//         "home": "Startseite",
//         "candidates": "Bewerber",
//         "employers": "Arbeitgeber",
//         "aboutUs": "Über uns",
//         "news": "Nachrichten",
//         "applicationAssistant": "Anwendungsassistent",
//         "testPage": "Testseite",
//         "logo": "Logoipsum"
//       },
//   },
// };

// i18n
//   .use(LanguageDetector) // Detects user's language
//   .use(initReactI18next) // Passes i18n down to react-i18next
//   .init({
//     resources,
//     fallbackLng: 'en', // Default language
//     debug: true, // Turn off for production
//     interpolation: {
//       escapeValue: false, // React already safes from XSS
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Fallback language in case a translation is missing
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: { common: require('../app/locales/en/common.json') },
      fr: { common: require('../app/locales/fr/common.json') },
      de: { common: require('../app/locales/de/common.json') },
    },
  });

export default i18n;
