<template>
  <section class="dash">
    <h1>لوحة التحكم</h1>

    <form @submit.prevent="save">
      <!-- قسم الهيرو -->
      <fieldset>
        <legend>البانر الرئيسي</legend>
        <label>
          العنوان
          <input v-model="content.heroTitle" />
        </label>
        <label>
          الوصف المختصر
          <input v-model="content.heroSubtitle" />
        </label>
      </fieldset>

      <!-- قسم المنتجات -->
      <fieldset>
        <legend>المنتجات</legend>
        <div v-for="p in content.products" :key="p.id" class="prod-item">
          <input v-model="p.name" placeholder="اسم المنتج" />
          <input
            v-model.number="p.price"
            type="number"
            step="0.1"
            placeholder="السعر"
          />
          <input v-model="p.img" placeholder="مسار الصورة" />
          <input v-model="p.nutrition" placeholder="معلومة التغذية" />
        </div>
      </fieldset>

      <!-- قسم القصة والرؤية -->
      <fieldset>
        <legend>القصة والرؤية</legend>
        <textarea v-model="content.farmStory" rows="3" />
        <textarea v-model="content.vision" rows="2" />
      </fieldset>

      <!-- شهادات -->
      <fieldset>
        <legend>الشهادات (افصل بعلامة فاصلة)</legend>
        <input v-model="certsString" />
      </fieldset>

      <button>حفظ</button>
      <p v-if="saved" class="saved">تم الحفظ!</p>
    </form>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useSiteStore } from '../stores/siteStore.js';

const store = useSiteStore();
const saved = ref(false);

// نعمل نسخة حيّة من الكائن في Pinia
const content = store.content;

// تحويل مصفوفة الشهادات ↔︎ نص
const certsString = computed({
  get: () => content.certificates.join(', '),
  set: (val) => (content.certificates = val.split(',').map((c) => c.trim()))
});

function save() {
  // Pinia قام بالفعل بتحديث LocalStorage عبر watch في store
  saved.value = true;
  setTimeout(() => (saved.value = false), 2000);
}
</script>

<style scoped>
.dash {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}
form {
  display: grid;
  gap: 1.5rem;
}
fieldset {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
}
legend {
  padding: 0 0.5rem;
  font-weight: 600;
}
input,
textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.prod-item {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
button {
  width: max-content;
  padding: 0.65rem 2rem;
  background: #34a853;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
}
.saved {
  color: green;
  margin-top: 0.5rem;
}
</style>
