<template>
    <nav class="nav__container" :class="{ 'scrolled': isScrolled }">
      <div class="div__logo">
        <h3><router-link to="/">Caladrius </router-link></h3>
      </div>
      
      <!-- Bouton Hamburger -->
      <button 
        class="hamburger"
        :class="{ active: isMenuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
        aria-expanded="isMenuOpen"
      >
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </button>
      
      <!-- Menu Navigation -->
      <div 
        class="div__menu"
        :class="{ active: isMenuOpen }"
      >
        <ul @click="closeMenu">
          <li><router-link to="/"> Accueil </router-link></li>
          <li> <router-link to="/about"> A propos </router-link> </li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/newsletter">Newsletter</router-link></li>
        </ul>
      </div>

      <div class="btn__started">
        <startButton label="Commencer" @click="router.push('/services')"/>
      </div>
    </nav>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import startButton from '../button/startButton.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  
  components: {
    startButton,
  },

  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const router = useRouter()
    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
      isScrolled,
      router,
    };
  }
};


</script>
  
<style scoped>
.nav__container {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: transparent;
transition: background-color 0.5s ease;
color: #f3f3f3;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
overflow-x: hidden; /* Empêche le débordement horizontal */
}

.nav__container.scrolled {
  background-color: #252525f8; /* ou la couleur noire de votre choix */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.div__logo h3 {
font-weight: 500;
font-size: 1.5rem;
color: #f3f3f3;
margin: 0;
}

.div__logo h3 a:hover{
  cursor: pointer;
  color: #5baaff;
  transition: ease-in-out 0.5s;
}

.div__menu ul {
display: flex;
list-style: none;
margin: 0;
padding: 0;

}

.div__menu li {
margin-left: 2rem;
}

.div__menu a {
text-decoration: none;
color: #f3f3f3;
font-weight: 400;
transition: color 0.3s ease;
position: relative;
padding: 0.5rem 0;
font-size: 1rem;
}

.div__menu a:hover {
color: #4dabf7;
}

/* Styles du bouton hamburger */
.hamburger {
display: none;
cursor: pointer;
background: #007bff;
border-radius: 1rem;
border: none;
padding: 0.5rem;
z-index: 1001;
}

.hamburger__line {
display: block;
width: 25px;
height: 2px;
background-color: #f3f3f3;
margin: 5px 0;
transition: all 0.3s ease;
}

/* Responsive - Menu Hamburger */
@media (max-width: 1280px) {

.nav__container {
  padding: 1rem;
}

.hamburger {
  display: block;
}

.div__menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #1a1a1a;
  padding: 2rem 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
  overscroll-behavior: contain; /* Évite le débordement du scroll parent */
}

.div__menu.active {
    transform: translateX(0);
}

.div__menu ul {
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: 1rem;
}

.div__menu li {
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 1rem;
}

.div__menu ul li a {
  display: block;
  padding: 1rem;
  font-size: 1rem;
}

/* Animation Hamburger */
.hamburger.active .hamburger__line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger.active .hamburger__line:nth-child(2) {
    opacity: 0;
}

.hamburger.active .hamburger__line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

.btn__started{
  display: none;
}
}
</style>