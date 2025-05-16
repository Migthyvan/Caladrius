<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button @click="closeModal" class="close-button" aria-label="Fermer la modale">&times;</button>
      </div>
      <div class="features">
        <h4>{{ subtitle }}</h4>
        <h3>€{{ price }}</h3>
      </div>
      <div class="modal-body">
        <inputFamily />
        <ul v-if="features && features.length" class="features-list">
          <li v-for="(item, index) in features" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="showFooter" class="modal-footer">
        <mainButton 
          @click="confirmAction" 
          class="confirm-button"
          label="Confirmer"
        />
        <mainButton 
          @click="closeModal" 
          class="cancel-button"
          label="Annuler"
          variant="outline"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import inputFamily from './inputFamily.vue';
import mainButton from '../button/mainButton.vue';

export default {
  name: 'ModalServicesTool',

  components: {
    inputFamily, 
    mainButton
  },

  props: {
    title: { 
      type: String, 
      default: 'Commander' 
    },
    subtitle: {
      type: String, 
      default: 'Description'
    },
    price: {
      type: String, 
      default: '0'
    },
    features: {
      type: Array,
      default: () => []
    },
    showFooter: { 
      type: Boolean, 
      default: true 
    }
  },

  emits: ['confirm', 'close'],

  setup(props, { emit }) {
    const isOpen = ref(false);

    const openModal = () => {
      isOpen.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      isOpen.value = false;
      document.body.style.overflow = 'auto';
      emit('close');
    };

    const confirmAction = () => {
      emit('confirm');
      closeModal();
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    onMounted(() => window.addEventListener('keydown', handleKeydown));
    onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

    return {
      isOpen,
      openModal,
      closeModal,
      confirmAction
    };
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: #16120F;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  padding: 24px;
  animation: fadeIn 0.3s ease-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #2E2A27;
  margin-bottom: 16px;
}

.modal-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
}

.features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  margin-bottom: 16px;
}

.features h4 {
  font-size: 1rem;
  color: #A0A0A0;
  margin: 0;
}

.features h3 {
  font-size: 1.5rem;
  color: #47a0ff;
  margin: 0;
  font-weight: 600;
}

.modal-body {
  padding: 16px 0;
}

.features-list {
  margin-top: 16px;
  padding-left: 20px;
  color: #E0E0E0;
}

.features-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #2E2A27;
  margin-top: 16px;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #A0A0A0;
  cursor: pointer;
  transition: color 0.2s;
  padding: 4px;
  line-height: 1;
}

.close-button:hover {
  color: #FFFFFF;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>