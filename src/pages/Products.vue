<template>
  <section class="products">
    <h1 class="title">منتجاتنا</h1>

    <div class="grid">
      <ProductCard
        v-for="item in store.content.products"
        :key="item.id"
        :product="item"
      />
    </div>

    <RouterLink to="/contact" class="order-link">
      اطلب مباشرة عبر واتساب
    </RouterLink>
  </section>
</template>

<script setup>
import { useSiteStore } from '../stores/siteStore.js';
import ProductCard from '../components/ProductCard.vue';

const store = useSiteStore();
</script>

<style scoped>
.products {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 0;
}
.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.order-link {
  display: block;
  width: max-content;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  background: #25d366; /* لون واتساب */
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
}
.order-link:hover {
  filter: brightness(0.9);
}
</style>
