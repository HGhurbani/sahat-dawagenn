// src/i18n.js

import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ar from './locales/ar.json';

const i18n = createI18n({
  legacy: false, // <--- أضف هذا السطر هنا
  locale: 'ar',
  fallbackLocale: 'en',
  messages: {
    en,
    ar,
  },
});

export default i18n;