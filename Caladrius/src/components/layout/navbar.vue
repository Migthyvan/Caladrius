<template>
    <nav class="nav__container">
      <div class="div__logo">
        <h3>caladrius</h3>
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
          <li><router-link to="/services">services</router-link></li>
          <li><router-link to="/contact">contact</router-link></li>
        </ul>
      </div>
    </nav>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
</script>
  
<style scoped>
.nav__container {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #202020;
color: #f3f3f3;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.div__logo h3 {
font-weight: 500;
font-size: 1.5rem;
color: #f3f3f3;
margin: 0;
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
@media (max-width: 1400px) {
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
    background-color: #202020;
    padding: 2rem 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
}

.div__menu.active {
    transform: translateX(0);
}

.div__menu ul {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.div__menu li {
    margin: 0;
    width: 100%;
    text-align: center;
}

.div__menu a {
    display: block;
    padding: 1rem;
    font-size: 1.2rem;
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
}
</style>