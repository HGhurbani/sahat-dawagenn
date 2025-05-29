<template>
  <header class="main-header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="شعار صحة للدواجن" />
      </router-link>
    </div>
    <nav>
      <router-link to="/">{{ $t('home') }}</router-link>
      <router-link to="/products">{{ $t('products') }}</router-link>
      <router-link to="/about">{{ $t('about') }}</router-link>
      <router-link to="/quality">{{ $t('quality') }}</router-link>
      <router-link to="/contact">{{ $t('contact') }}</router-link>
    </nav>
    <LanguageSwitcher />
  </header>
</template>

<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo img {
  height: 50px;
}

nav a {
  margin: 0 1rem;
  color: #565656;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.1rem;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #d13d3d;
}
</style>