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
    path:'/external-about',
    name: 'external-about',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/about'
    }
  },
  
  {
    path:'/services',
    name: 'services',
    component: () => import('../views/services.vue')
  },
  {
    path:'/external-services',
    name: 'external-services',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/services'
    }
  },
  
  {
    path:'/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path:'/external-contact',
    name: 'external-contact',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/contact'
    }
  },
  
  {
    path:'/newsletter',
    name: 'newsletter',
    component: () => import('../views/newsletter.vue')
  },
  {
    path:'/external-newsletter',
    name: 'external-newsletter',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/newsletter'
    }
  },

  {
    path:'/conditions',
    name: 'conditions',
    component: () => import('../components/policies/conditions.vue')
  },
  {
    path:'/external-conditions',
    name: 'external-conditions',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/conditions'
    }
  },

  {
    path:'/confidentialité',
    name: 'confidentialité',
    component: () => import('../components/policies/confidentialité.vue')
  },
  {
    path:'/external-confidentialité',
    name: 'external-confidentialité',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/confidentialité'
    }
  },

  {
    path:'/valeurs_morales_et_éthique',
    name: 'valeurs_morales_et_éthique',
    component: () => import('../components/policies/valeurs_morales_et_éthique.vue')
  },
  {
    path:'/external-valeurs_morales_et_éthique',
    name: 'external-valeurs_morales_et_éthique',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/valeurs_morales_et_éthique'
    }
  },


  {
    path:'/mentions_de_copyright',
    name: 'mentions_de_copyright',
    component: () => import('../components/policies/mentions_de_copyright.vue')
  },
  {
    path:'/external-mentions_de_copyright',
    name: 'external-mentions_de_copyright',
    beforeEnter() {
      window.location.href = 'https://caladriustech.com/mentions_de_copyright'
    }
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
  },
  {
    path:'/quote',
    name: 'quote',
    component: () => import('../views/quote.vue')
  },
  {
    path:'/external-quote',
    name: 'external-quote',
    component: () => import('../components/section/deepSeekquoteSection.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;