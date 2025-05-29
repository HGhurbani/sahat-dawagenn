import { defineStore } from 'pinia';

// قم باستيراد الصور في الأعلى باستخدام الاسم المستعار
import organicImg from '@/assets/organic.jpg';
import enrichedImg from '@/assets/enriched.jpg';

export const useSiteStore = defineStore('site', {
  state: () => ({
    products: [
      {
        id: 1,
        nameKey: 'organic_eggs_name',
        nutritionKey: 'organic_eggs_nutrition',
        img: organicImg, // استخدم المتغير المستورد هنا
        price: 34
      },
      {
        id: 2,
        nameKey: 'enriched_eggs_name',
        nutritionKey: 'enriched_eggs_nutrition',
        img: enrichedImg, // استخدم المتغير المستورد هنا
        price: 29
      }
    ]
  })
});