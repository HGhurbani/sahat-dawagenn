<template>
  <div class="about-page">
    <div class="about-header">
      <h1>{{ $t('about_us_title') }}</h1>
    </div>
    <div class="about-content">
      <section class="intro">
        <p>{{ $t('about_us_intro') }}</p>
      </section>
      
      <div class="features-grid">
        <div class="feature-card">
          <h3>{{ $t('our_commitment_title') }}</h3>
          <p>{{ $t('our_commitment_text') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ $t('our_team_title') }}</h3>
          <p>{{ $t('our_team_text') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  animation: fadeIn 1s ease-in-out;
}

.about-header {
  background: linear-gradient(to right, var(--color-primary), #a12f2f);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 0 0 50% 50% / 0 0 10% 10%;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 3rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro {
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--color-secondary);
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.feature-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.feature-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>