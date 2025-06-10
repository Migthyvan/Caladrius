<template>
    <div class="main__container center__flex__mobile">
      <transition name="fade" mode="out-in">
        <div class="step" v-if="step === 1" key="step1">
          <h2 class="animated-title">Je créé mon devis gratuitement</h2>
          <h4>Créer votre devis en quelques clics</h4>
          <mainButton label="Commencer" @click="moveToNextStep"></mainButton>
        </div>
  
        <div class="step" v-else-if="step === 2" key="step2">
          <h2 class="animated-title">Je créé mon devis gratuitement</h2>
          <h4>Je choisis mon type de projet</h4>
          <choicesBox @selected="handleSelectedItem" />
          <div class="about__btn">
            <secondButton label="précédent" @click="step--"></secondButton>
            <mainButton label="Suivant" @click="moveToNextStep"></mainButton>
          </div>
        </div>
        
        <div class="step" v-else-if="step === 3" key="step 3">
          <h2 class="animated-title">Je créé mon devis gratuitement</h2>
          <h4>Je choisis mon type de projet</h4>
          <choicesBox @selected="handleSelectedItem" />
          <div class="about__btn">
            <secondButton label="précédent" @click="step--"></secondButton>
            <mainButton label="Suivant" @click="moveToNextStep"></mainButton>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import navbar from '../layout/navbar.vue';
  import mainButton from '../button/mainButton.vue';
  import secondButton from '../button/secondButton.vue';
  import selectFamily from '../tools/selectFamily.vue';
  import choicesBox from '../tools/choicesBox.vue';
  import { ref } from 'vue';
  export default {
      components:{
          navbar, mainButton, secondButton, selectFamily, choicesBox
      },
      setup(){
          const step = ref(1);
          const moveToNextStep = () => {
              step.value++;
          }
          const handleSelectedItem = (item) => {
            projectType.value = item;
          }
          return {
              step,
              moveToNextStep,
              projectType: ref(''),
              handleSelectedItem
          }
      }
  }
  </script>
  
  <style>
  .main__container{
    padding: 4rem 1rem 1rem 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .step{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .about__btn{
    display: flex;
    align-items: start;
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
  </style>