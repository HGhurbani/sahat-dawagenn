import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import i18n from './i18n'; // استيراد إعدادات i18n
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n); // استخدام إعدادات i18n
app.mount('#app');