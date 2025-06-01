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
    path:'/confidentialité',
    name: 'confidentialité',
    component: () => import('../components/policies/confidentialité.vue')
  },
  {
    path:'/valeurs_morales_et_éthique',
    name: 'valeurs_morales_et_éthique',
    component: () => import('../components/policies/valeurs_morales_et_éthique.vue')
  },
  {
    path:'/mentions_de_copyright',
    name: 'mentions_de_copyright',
    component: () => import('../components/policies/mentions_de_copyright.vue')
  },
  {
    path:'/droits_auteurs',
    name: 'droits_auteurs',
    component: () => import('../components/policies/droits_auteurs.vue')
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