import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;