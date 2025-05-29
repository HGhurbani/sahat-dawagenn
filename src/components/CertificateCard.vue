<template>
  <div class="cert-card">
    <img :src="img" :alt="title" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String
});
</script>

<style scoped>
.cert-card {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 12px;
  text-align: center;
  background: #fff;
}
.cert-card img {
  width: 60px;
  margin-bottom: 0.75rem;
}
</style>
