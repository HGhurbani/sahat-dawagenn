<template>
  <figure class="item">
    <img :src="src" :alt="caption" />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  caption: { type: String, required: true }
});
</script>

<style scoped>
.item {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  background: #fff;
}
.item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
figcaption {
  padding: 0.5rem;
  font-size: 0.85rem;
  text-align: center;
  color: #555;
}
</style>
