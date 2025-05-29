<template>
  <article class="card">
    <img :src="product.img" :alt="product.name" />
    <h3>{{ product.name }}</h3>

    <p class="nutrition">{{ product.nutrition }}</p>

    <p class="price">
      <span>{{ product.price }} ر.س</span>
      <small>/ الطبق (30 بيضة)</small>
    </p>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.25s;
  background: #fff;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}
.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}
.nutrition {
  font-size: 0.9rem;
  color: #666;
  min-height: 48px;
}
.price {
  font-weight: 700;
  margin-top: 0.5rem;
}
.price small {
  font-weight: 400;
  color: #777;
}
</style>
