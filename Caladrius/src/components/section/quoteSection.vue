<template>
  <div class="main__container center__flex__mobile">
    <transition name="fade" mode="out-in">
      <!-- Étape 1 - Démarrage -->
      <div class="step" v-if="step === 1" key="step1">
        <h2 class="animated-title">Je crée mon devis gratuitement</h2>
        <h4>Créer votre devis en quelques clics</h4>
        <main-button label="Commencer" @click="moveToNextStep" />
      </div>

      <!-- Étape 2 - Type de projet -->
      <div class="step" v-else-if="step === 2" key="step2">
        <h2 class="animated-title">Je crée mon devis gratuitement</h2>
        <h4>Je choisis mon type de projet</h4>
        <choices-box v-model="choice" />
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant" 
            @click="route.push(`/quote/${choice}`)"
            :disabled="!choice"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import MainButton from '../button/mainButton.vue';
import SecondButton from '../button/secondButton.vue';
import ChoicesBox from '../tools/choicesBox.vue';
import SelectFamily from '../tools/selectFamily.vue';
import inputFamily from '../tools/inputFamily.vue';
import checkBoxTool from '../tools/checkBoxTool.vue';
import textAreaTool from '../tools/textAreaTool.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'DevisCreator',
  components: {
    MainButton,
    SecondButton,
    ChoicesBox,
    SelectFamily,
    inputFamily,
    checkBoxTool,
    textAreaTool
  },
  setup() {

    const step = ref(1);
    const projectType = ref('');
    
    const route = useRouter();
    const choice = ref("");
    const moveToNextStep = () => {
      step.value++;
    };

    return {
      step,
      projectType,
      choice,
      moveToNextStep,
      route,
    };
  }
};
</script>

<style scoped>
.main__container {
  padding: 6rem 1rem 1rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: 
    linear-gradient(to bottom, 
        rgba(22, 18, 15, 0.4) 0%, 
        rgba(22, 18, 15, 0.7) 70%, 
        #16120F 100%),
    url('../../assets/pictures/antiquities-6973196_1920.jpg');
  background-size: cover;
  box-sizing: border-box;
  overflow-y: auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (min-width: 768px) {
  .main__container {
    padding: 3rem 1rem 1rem 1rem;
  }
  
  h2, h3, h4 {
    width: 100%;
    text-align: center;
  }
  
  .step {
    align-items: center;
    padding-top: 4rem;
    max-width: 800px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .main__container {
    padding: 4rem 2rem 2rem 2rem;
  }
  
  .step {
    padding-top: 2rem;
  }
}
</style>