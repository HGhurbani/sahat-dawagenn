import { defineStore } from 'pinia';
import { reactive, watch } from 'vue';

export const useSiteStore = defineStore('site', () => {
  // حاول استرجاع المحتويات من localStorage أو استخدم قيمًا افتراضية
  const content = reactive(
    JSON.parse(localStorage.getItem('siteContent')) || {
      heroTitle: 'صحة تبدأ من هنا',
      heroSubtitle: 'التزامنا تقديم بيض صحي طازج يوميًا.',
      products: [
        {
          id: 1,
          name: 'بيض عضوي',
          img: '/src/assets/organic.jpg',
          price: 34,
          nutrition: 'غني بالأوميغا-3 وخالٍ من المضادات الحيوية'
        },
        {
          id: 2,
          name: 'بيض مُخصَّب',
          img: '/src/assets/enriched.jpg',
          price: 29,
          nutrition: 'مدعّم بالفيتامين D والبروتينات'
        }
      ],
      farmStory:
        'منذ عام 2010 نزرع الثقة بتربية دواجن تتغذى على علف طبيعي خالٍ من الكيماويات.',
      vision:
        'رؤيتنا هي توفير غذاء آمن وصحي لكل أسرة مع الالتزام بالاستدامة.',
      certificates: ['ISO 22000', 'حلال', 'Organic EU']
    }
  );

  // أي تغيير نحفظه في التخزين المحلي
  watch(
    () => content,
    () => localStorage.setItem('siteContent', JSON.stringify(content)),
    { deep: true }
  );

  return { content };
});
