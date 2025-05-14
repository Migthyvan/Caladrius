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
  {
    path:'/services',
    name: 'services',
    component: () => import('../views/services.vue')
  },
  {
    path:'/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path:'/newsletter',
    name: 'newsletter',
    component: () => import('../views/newsletter.vue')
  },
  {
    path:'/conditions',
    name: 'conditions',
    component: () => import('../components/policies/conditions.vue')
  },
  {
    path:'/zakistudy',
    name: 'zakistudy',
    component: () => import('../views/secondViews/zakiStudy.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;