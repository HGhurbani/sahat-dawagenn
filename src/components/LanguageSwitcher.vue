<template>
  <div class="language-switcher">
    <button @click="switchLanguage('ar')" :class="{ active: currentLanguage === 'ar' }">
      عربي
    </button>
    <button @click="switchLanguage('en')" :class="{ active: currentLanguage === 'en' }">
      English
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n();

const switchLanguage = (lang) => {
  locale.value = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

const currentLanguage = computed(() => locale.value);
</script>

<style scoped>
.language-switcher button {
  background-color: transparent;
  border: 1px solid #565656;
  color: #333;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 5px;
  border-radius: 5px;
}

.language-switcher button:hover,
.language-switcher button.active {
  background-color: #d13d3d;
  color: #fff;
  border-color: #d13d3d;
}
</style>