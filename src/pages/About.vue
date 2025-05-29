<template>
  <section class="about">
    <h1>عن مزرعة «صحة للدواجن»</h1>

    <article class="story">
      <h2>القصة والرؤية</h2>
      <p>{{ store.content.farmStory }}</p>
      <p>{{ store.content.vision }}</p>
    </article>

    <article class="gallery">
      <h2>المزارع والمرافق</h2>
      <div class="grid">
        <GalleryItem
          v-for="img in images"
          :key="img.src"
          :src="img.src"
          :caption="img.caption"
        />
      </div>
    </article>
  </section>
</template>

<script setup>
import { useSiteStore } from '../stores/siteStore.js';
import GalleryItem from '../components/GalleryItem.vue';

const store = useSiteStore();

// صور المعرض (أضفها إلى src/assets/)
const images = [
  {
    src: '/src/assets/farm1.jpg',
    caption: 'حقول الدواجن المفتوحة'
  },
  {
    src: '/src/assets/farm2.jpg',
    caption: 'علف طبيعي ١٠٠٪'
  },
  {
    src: '/src/assets/facility1.jpg',
    caption: 'خطوط الفرز والتعبئة الآلية'
  },
  {
    src: '/src/assets/facility2.jpg',
    caption: 'مختبر الجودة الداخلي'
  }
];
</script>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.story {
  margin-bottom: 3rem;
  line-height: 1.8;
  font-size: 1.05rem;
}
.gallery h2 {
  margin-bottom: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.25rem;
}
</style>
