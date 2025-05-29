<template>
  <div class="hero-section">
    <div class="hero-background" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="animate__animated animate__fadeInDown">{{ $t('heroTitle') }}</h1>
      <p class="animate__animated animate__fadeInUp">{{ $t('heroSubtitle') }}</p>
      <router-link to="/products" class="cta-button animate__animated animate__zoomIn">
        {{ $t('products') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
// في المستقبل، يمكنك إضافة props هنا لتغيير الخلفية ديناميكيًا
import { ref } from 'vue';
// لاستخدام صورة من مجلد assets
import heroImage from '@/assets/hero-background.jpg';

const backgroundImage = ref(heroImage);
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.hero-section {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: var(--color-primary);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(209, 61, 61, 0.4);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(209, 61, 61, 0.6);
}
</style>