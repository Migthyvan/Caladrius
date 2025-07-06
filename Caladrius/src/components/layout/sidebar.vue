<template>
  <div>
    <!-- Bouton Hamburger -->
    <button 
      class="hamburger"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
      aria-label="Menu"
      :aria-expanded="isMenuOpen"
    >
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </button>

    <!-- Sidebar Container -->
    <aside 
      class="sidebar__container" 
      :class="{ active: isMenuOpen }"
      @click="handleSidebarClick"
    >
      <div class="sidebar__logo">
        <h3><router-link to="/"><i class="fas fa-dove"></i> Caladrius</router-link></h3>
      </div>
      
      <div class="sidebar__menu">
        <ul>
          <li v-for="link in navLinks" :key="link.path">
            <router-link 
              :to="link.path"
              :class="{ active: isActive(link) }"
              @click="closeMenuOnMobile"
            >
              <i :class="link.icon"></i> {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="btn__started">
        <button class="start-button" @click="navigateToServices">Deconnexion</button>
      </div>
    </aside>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'Sidebar',
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    const router = useRouter();

    const navLinks = [
      { path: '/', name: 'Sujets', icon: 'fas fa-home', exact: true },
      { path: '/about', name: 'À propos', icon: 'fas fa-info-circle' },
      { path: '/services', name: 'Services', icon: 'fas fa-cogs' },
      { path: '/contact', name: 'Contact', icon: 'fas fa-envelope' },
      { path: '/newsletter', name: 'Newsletter', icon: 'fas fa-newspaper' },
    ];

    const isActive = (link) => {
      if (link.exact) {
        return route.path === link.path;
      }
      return route.path.startsWith(link.path);
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const closeMenuOnMobile = () => {
      if (window.innerWidth <= 1150) {
        closeMenu();
      }
    };

    const handleSidebarClick = (event) => {
      // Empêcher la propagation pour que le clic à l'intérieur de la sidebar ne la ferme pas
      event.stopPropagation();
    };

    const navigateToServices = () => {
      closeMenu();
      router.push('/quote');
    };

    // Fermer le menu si on clique en dehors (pour mobile)
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar__container');
      const hamburger = document.querySelector('.hamburger');
      if (isMenuOpen.value && window.innerWidth <= 1150 && 
          !sidebar.contains(event.target) && 
          event.target !== hamburger) {
        closeMenu();
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      isMenuOpen,
      navLinks,
      isActive,
      toggleMenu,
      closeMenu,
      closeMenuOnMobile,
      handleSidebarClick,
      navigateToServices
    };
  }
};
</script>

<style scoped>
/* Styles pour la sidebar */
.sidebar__container {
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;
  overflow-y: auto;
  padding: 1.5rem 0;
}

@media (max-width: 1150px) {
  .sidebar__container {
    transform: translateX(-100%);
    box-shadow: none;
  }
  
  .sidebar__container.active {
    transform: translateX(0);
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.4);
  }
}

.sidebar__logo {
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid #333;
  margin-bottom: 1.5rem;
}

.sidebar__logo h3 {
  font-weight: 500;
  font-size: 1.8rem;
  color: #f3f3f3;
  margin: 0;
  transition: transform 0.3s ease;
}

.sidebar__logo h3:hover {
  transform: scale(1.05);
}

.sidebar__logo a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar__logo i {
  color: #4dabf7;
  font-size: 1.6rem;
}

.sidebar__menu {
  flex: 1;
  padding: 0 1rem;
}

.sidebar__menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar__menu li {
  border-radius: 8px;
  overflow: hidden;
  animation: fadeIn 0.4s ease forwards;
}

.sidebar__menu li:nth-child(1) { animation-delay: 0.1s; }
.sidebar__menu li:nth-child(2) { animation-delay: 0.15s; }
.sidebar__menu li:nth-child(3) { animation-delay: 0.2s; }
.sidebar__menu li:nth-child(4) { animation-delay: 0.25s; }
.sidebar__menu li:nth-child(5) { animation-delay: 0.3s; }
.sidebar__menu li:nth-child(6) { animation-delay: 0.35s; }

.sidebar__menu a {
  text-decoration: none;
  color: #f3f3f3;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
}

.sidebar__menu a:hover {
  background: rgba(77, 171, 247, 0.15);
  color: #4dabf7;
}

.sidebar__menu a.active {
  background: rgba(77, 171, 247, 0.2);
  color: #4dabf7;
  font-weight: 500;
}

.sidebar__menu a.active::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #4dabf7;
}

.sidebar__menu i {
  width: 24px;
  text-align: center;
}

.btn__started {
  padding: 0 1.5rem;
  margin-top: 1rem;
}

.start-button {
  background: linear-gradient(to right, #4dabf7, #3b82f6);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  display: block;
}

.start-button:hover {
  background: linear-gradient(to right, #3b82f6, #4dabf7);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

/* Bouton Hamburger */
.hamburger {
  display: none;
  cursor: pointer;
  background: #4dabf7;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.hamburger__line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #f3f3f3;
  margin: 5px 0;
  transition: all 0.3s ease;
  border-radius: 3px;
}

/* Animation Hamburger */
.hamburger.active .hamburger__line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .hamburger__line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger__line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Responsive Design */
@media (max-width: 1150px) {
  .hamburger {
    display: block;
  }
}

@media (max-width: 768px) {
  .sidebar__container {
    width: 260px;
  }
  
  .hamburger {
    top: 1rem;
    left: 1rem;
  }
}

/* Animation des liens */
@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>