<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>{{ $t('contact_us_title') }}</h1>
      <p>{{ $t('contact_us_subtitle') }}</p>
    </div>
    <div class="contact-content">
      <div class="contact-info">
        <div class="info-item">
          <h3>{{ $t('address_title') }}</h3>
          <p>{{ $t('address_text') }}</p>
        </div>
        <div class="info-item">
          <h3>{{ $t('phone_title') }}</h3>
          <p>{{ $t('phone_text') }}</p>
        </div>
        <div class="info-item">
          <h3>{{ $t('email_title') }}</h3>
          <p>{{ $t('email_text') }}</p>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="sendMessage">
        <input type="text" :placeholder="$t('form_name')" required />
        <input type="email" :placeholder="$t('form_email')" required />
        <textarea :placeholder="$t('form_message')" rows="6" required></textarea>
        <button type="submit">{{ $t('form_send') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const sendMessage = () => {
  // هنا يمكنك إضافة منطق إرسال النموذج في المستقبل
  alert('تم إرسال رسالتك بنجاح! (هذه رسالة تجريبية)');
}
</script>

<style scoped>
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
}
.page-header p {
  font-size: 1.1rem;
  color: var(--color-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.info-item {
  margin-bottom: 2rem;
}
.info-item h3 {
  color: var(--color-primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
}
.contact-form input,
.contact-form textarea {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
}
.contact-form button {
  padding: 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: background-color 0.3s;
}
.contact-form button:hover {
  background-color: #a12f2f;
}
</style>