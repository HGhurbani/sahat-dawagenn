<template>
  <section class="quality">
    <h1>شهادات الجودة</h1>

    <div class="certs">
      <CertificateCard
        v-for="cert in store.content.certificates"
        :key="cert"
        :img="getImg(cert)"
        :title="cert"
      />
    </div>

    <h2 class="test-title">آراء العملاء</h2>
    <div class="tests">
      <TestimonialCard
        v-for="t in testimonials"
        :key="t.text"
        :text="t.text"
        :author="t.author"
      />
    </div>
  </section>
</template>

<script setup>
import { useSiteStore } from '../stores/siteStore.js';
import CertificateCard from '../components/CertificateCard.vue';
import TestimonialCard from '../components/TestimonialCard.vue';

const store = useSiteStore();

// شهادات → صور رمزية مخزَّنة في assets بنفس الاسم (مثلاً iso.svg، halal.svg)
function getImg(cert) {
  return `/src/assets/${cert.toLowerCase().replaceAll(' ', '-')}.svg`;
}

// آراء ثابتة بسيطة (يمكن تعديلها من Dashboard لاحقًا)
const testimonials = [
  {
    text: 'أفضل بيض جربته! الطعم نظيف ويُشعِرني بالثقة.',
    author: 'سارة م.'
  },
  {
    text: 'سريعون في التوصيل والجودة واضحة من القشرة للصفار.',
    author: 'أحمد ب.'
  }
];
</script>

<style scoped>
.quality {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}
.certs {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}
.test-title {
  text-align: center;
  margin-bottom: 1rem;
}
.tests {
  display: grid;
  gap: 1rem;
}
</style>
