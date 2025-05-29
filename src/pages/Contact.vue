<template>
  <section class="contact">
    <h1>تواصل معنا</h1>

    <!-- نموذج الاتصال المحلي -->
    <form @submit.prevent="submitForm">
      <label>
        الاسم
        <input v-model="name" required />
      </label>

      <label>
        البريد الإلكتروني
        <input type="email" v-model="email" required />
      </label>

      <label>
        رسالتك
        <textarea v-model="message" rows="4" required></textarea>
      </label>

      <button>إرسال</button>

      <p v-if="sent" class="thank">تم الإرسال! سنرد عليك قريبًا.</p>
    </form>

    <!-- روابط مباشرة -->
    <aside class="links">
      <h2>روابط سريعة</h2>
      <a
        class="whatsapp"
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener"
      >
        تواصل عبر واتساب
      </a>
      <a
        class="insta"
        href="https://www.instagram.com/yourfarm"
        target="_blank"
        rel="noopener"
      >
        تابعنا على إنستجرام
      </a>
    </aside>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const sent = ref(false);

function submitForm() {
  // نحفظ الطلب في LocalStorage للمراجعة لاحقًا (اختياري)
  const requests =
    JSON.parse(localStorage.getItem('contactRequests') || '[]');
  requests.push({ name: name.value, email: email.value, message: message.value, date: new Date() });
  localStorage.setItem('contactRequests', JSON.stringify(requests));

  sent.value = true;
  // إعادة تعيين
  name.value = email.value = message.value = '';
}
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 0;
}
form {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}
input,
textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button {
  width: max-content;
  padding: 0.6rem 2rem;
  background: #ffdd00;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}
.thank {
  color: green;
  margin-top: 0.5rem;
}
.links {
  text-align: center;
}
.whatsapp,
.insta {
  display: inline-block;
  padding: 0.7rem 1.5rem;
  margin: 0.5rem;
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
}
.whatsapp {
  background: #25d366;
}
.insta {
  background: #e1306c;
}
</style>
