import { createI18n } from 'vue-i18n';

// استيراد ملفات الترجمة
import en from './locales/en.json';
import ar from './locales/ar.json';

// إنشاء نسخة من i18n
const i18n = createI18n({
  locale: 'ar', // تحديد اللغة الافتراضية (العربية)
  fallbackLocale: 'en', // تحديد اللغة البديلة في حال عدم توفر الترجمة
  messages: {
    en,
    ar,
  },
});

export default i18n;