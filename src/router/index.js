import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/products', component: () => import('../pages/Products.vue') },
  { path: '/about', component: () => import('../pages/About.vue') },
  { path: '/contact', component: () => import('../pages/Contact.vue') },
  { path: '/quality', component: () => import('../pages/Quality.vue') },
  { path: '/dashboard', component: () => import('../pages/Dashboard.vue') }
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
