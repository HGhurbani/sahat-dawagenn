<template>
  <a :href="whatsappLink" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
    <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" />
  </a>
</template>

<script setup>
import { ref } from 'vue';
// قم بتغيير الرقم إلى رقم الواتساب الخاص بك مع رمز الدولة
const phoneNumber = '966000000000';
const whatsappLink = ref(`https://wa.me/${phoneNumber}`);
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: transform 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float img {
  width: 35px;
  height: 35px;
}
</style>