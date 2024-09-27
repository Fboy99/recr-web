// i18n/next-i18next.config.js
import path from 'path';

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'],
  },
  localePath: path.resolve('../app/locales'),
};