<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ title }}</h3>
        <button @click="closeModal" class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div v-if="showFooter" class="modal-footer">
        <button @click="closeModal" class="cancel-button">Annuler</button>
        <button @click="confirmAction" class="confirm-button">Confirmer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'ModalComponent',
  props: {
    title: { type: String, default: 'Titre de la modale' },
    showFooter: { type: Boolean, default: true }
  },
  emits: ['confirm', 'close'], // Déclaration explicite des événements
  setup(props, { emit }) {
    const isOpen = ref(false);

    // Méthodes
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

    // Lifecycle hooks
    onMounted(() => window.addEventListener('keydown', handleKeydown));
    onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

    // Expose les méthodes au template et au parent
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #16120F;;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.modal-body {
  padding: 16px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px;
  border-top: 1px solid #eee;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.confirm-button {
  background: #42b983;
  color: white;
}
</style>