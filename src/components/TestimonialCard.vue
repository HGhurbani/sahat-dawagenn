<template>
  <blockquote class="test-card">
    <p>“{{ text }}”</p>
    <footer>— {{ author }}</footer>
  </blockquote>
</template>

<script setup>
defineProps({
  text: String,
  author: String
});
</script>

<style scoped>
.test-card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  background: #fafafa;
  font-size: 0.95rem;
}
footer {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #555;
  text-align: end;
}
</style>
