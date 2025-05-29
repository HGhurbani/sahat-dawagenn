<template>
  <section class="hero">
    <img class="hero-img" :src="heroImg" alt="منتجات بيض صحية" />
    <div class="overlay">
      <h1>{{ store.content.heroTitle }}</h1>
      <p>{{ store.content.heroSubtitle }}</p>
      <RouterLink to="/products" class="cta">تصفح المنتجات</RouterLink>
    </div>
  </section>

  <section class="intro">
    <h2>لماذا «صحة للدواجن»؟</h2>
    <p>
      نربي دجاجنا على أعلاف طبيعية 100٪ دون مضادات حيوية أو منشطات نمو، ونلتزم
      بأساليب إنتاج مستدامة تحافظ على صحة الطيور وجودة البيض.
    </p>
  </section>
</template>

<script setup>
import { useSiteStore } from '../stores/siteStore.js';
import heroImg from '../assets/hero.jpg';

const store = useSiteStore();
</script>

<style scoped>
.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}
.overlay h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0.5rem;
}
.overlay p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  margin-bottom: 1.5rem;
}
.cta {
  background: #ffdd00;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}
.cta:hover {
  filter: brightness(0.9);
}
.intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}
.intro h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
</style>
