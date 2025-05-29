<template>
  <div>
    <Hero />
    <div class="page-content">
      <section class="farm-story">
        <h2>{{ $t('farmStory') }}</h2>
      </section>
      <section class="vision">
        <h2>{{ $t('vision') }}</h2>
      </section>
    </div>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
</script>

<style scoped>
.page-content {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;
}

.farm-story, .vision {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  color: var(--color-secondary);
  line-height: 1.5;
}
</style>