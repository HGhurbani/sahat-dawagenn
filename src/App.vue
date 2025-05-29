<template>
  <div id="main-app">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <WhatsAppButton />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import WhatsAppButton from './components/WhatsAppButton.vue'; // استيراد المكون
</script>

<style>
/* ... نفس الأنماط السابقة ... */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700&display=swap');

:root {
  --color-primary: #d13d3d;
  --color-secondary: #565656;
  --color-text: #333;
  --color-background: #fdfdfd;
}

body {
  font-family: 'Cairo', sans-serif;
  background-color: var(--color-background);
  color: var(--color-text);
  margin: 0;
  line-height: 1.6;
}

#main-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  /* إزالة الحشو من هنا لإعطاء الصفحات كامل المساحة */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>