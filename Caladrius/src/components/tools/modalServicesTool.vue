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
        <inputFamily 
          label="Entrer votre nom"
          v-model="customer.name" 
        />
        <inputFamily 
          label="Entrer une email"
          type="email"
          v-model="customer.email"
        />
      </div>
      <transition>
        <p v-if = 'attempts > 0' class="error__message">
          {{message.errorMessages}}
        </p>
      </transition>
      <transition>
        <p v-if = 'succes === true'>
          {{message.successMessage}}
        </p>
      </transition>
      <div v-if="showFooter" class="modal-footer">
        <secondButton 
          @click="closeModal" 
          class="cancel-button"
          label="Annuler"
          variant="outline"
          v-if="!succes"
        />
        <mainButton 
          @click="confirmAction" 
          class="confirm-button"
          label="Confirmer"
          :loading="isLoading"
          v-if="!succes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import inputFamily from './inputFamily.vue';
import mainButton from '../button/mainButton.vue';
import secondButton from '../button/secondButton.vue';
import instance from '@/_services/api';

export default {
  name: 'ModalServicesTool',
  components: { inputFamily, mainButton, secondButton },
  
  props: {
    title: { type: String, default: 'Commander' },
    subtitle: { type: String, default: 'Description' },
    price: { type: String, default: '0' },
    features: { type: Array, default: () => [] },
    showFooter: { type: Boolean, default: true }
  },

  emits: ['confirm', 'close'],

  setup(props, { emit }) {
    const isOpen = ref(false);
    const message = ref({ errorMessages: '', successMessage: '' });
    const attempts = ref(0);
    const isLoading = ref(false);
    const succes = ref(false);

    const initialCustomerState = {
      name: '',
      email: '',
      services: props.title,
      price: props.price,
      message: `J'aimerais commander le service ${props.title} pour le prix de ${props.price} €`
    };

    const customer = ref({...initialCustomerState});

    const openModal = () => {
      isOpen.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      isOpen.value = false;
      document.body.style.overflow = 'auto';
      emit('close');
      resetForm();
    };

    const resetForm = () => {
      customer.value = {...initialCustomerState};
      message.value = { errorMessages: '', successMessage: '' };
      succes.value = false;
      isLoading.value = false;
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape' && isOpen.value) closeModal();
    };

    const confirmAction = async () => {
      if (!customer.value.name || !customer.value.email) {
        message.value.errorMessages = 'Veuillez remplir tous les champs.';
        attempts.value++;
        return;
      }

      isLoading.value = true;
      message.value.errorMessages = '';

      try {
        await instance.post('/contact/service/', customer.value);
        emit('confirm');
        message.value.successMessage = 'Formulaire envoyé avec succès! Consultez votre boîte mail.';
        succes.value = true;
        attempts.value = 0;
        
        setTimeout(() => {
          closeModal();
        }, 7000);
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        message.value.errorMessages = 'Une erreur est survenue. Veuillez réessayer.';
        attempts.value++;
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => window.addEventListener('keydown', handleKeydown));
    onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

    return {
      isOpen,
      attempts,
      message,
      isLoading,
      succes,
      openModal,
      closeModal,
      confirmAction,
      customer
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.error__message{
  color: #ff2323;
  font-size: 1rem;
  text-align: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>