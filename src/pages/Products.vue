<template>
  <div class="products-page">
    <div class="page-header">
      <h1>{{ $t('products') }}</h1>
    </div>
    <div class="products-grid">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
      >
        <div class="product-image">
          <img :src="product.img" :alt="$t(product.nameKey)" />
        </div>
        <div class="product-info">
          <h3>{{ $t(product.nameKey) }}</h3>
          <p>{{ $t(product.nutritionKey) }}</p>
          <div class="product-price">
            <span>{{ $t('price_label') }}: {{ product.price }} {{ $t('currency') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/siteStore';
import { computed } from 'vue';

const siteStore = useSiteStore();
const products = computed(() => siteStore.products);
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  margin-top: 0;
  color: var(--color-secondary);
}

.product-info p {
  color: #666;
  flex-grow: 1;
}

.product-price {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-top: 1rem;
  text-align: right;
}
</style>