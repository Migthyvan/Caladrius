import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import du router
import '@/assets/base.css'
import '@/assets/main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const app = createApp(App);
app.use(router); // Utilisation du router
app.mount('#app');
AOS.init({
    duration: 1000, // Durée de l'animation (ms)
    once: false, // Animation jouée plusieurs fois
  });