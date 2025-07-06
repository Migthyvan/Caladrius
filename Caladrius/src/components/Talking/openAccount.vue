<template>
  <div class="submain__container">
    <transition name="fade" mode="out-in">
      <!-- Étape 1 - Démarrage -->
      <div class="step" v-if="step === 1" key="step1">
        <h2>Discussons ensemble</h2>
        <h4>
          Découvrez une communauté, prenez part aux différents projets sur lesquelles
          nous travaillons et donnez vos points de vues.
        </h4>
        <p>(Bientôt disponible)</p>
        <div class="navigation-buttons">
          <second-button label="Je me connecte" @click="goToConnexion" />
          <main-button 
            label="J'ouvre mon compte" 
            @click="moveToNextStep"
          />
        </div>
      </div>

      <!-- Étape 2 - Type de projet -->
      <div class="step" v-else-if="step === 2" key="step2">
        <h2 class="animated-title">Je crée mon compte</h2>
        <input-family
            label = "Nom d'utilisateur"
            type = "text"
            placeholder="Entrer un nom d'utilisateur"
            v-model="user.username"
        />
        <input-family
            label = "Votre email"
            type = "email"
            placeholder="Entrer votre mot email"
            v-model="user.email"
        />
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant"
            @click="moveToNextStep" 
          />
        </div>
        <transition name="fade">
          <p v-if="message.error" class="error__message">{{ message.error }}</p>
        </transition>
      </div>
        
      <!-- Étape 3 - mot de passe -->
      <div class="step" v-else-if="step === 3" key="step3">
        <h2 class="animated-title">Je crée mon compte</h2>
        <input-family
          label = "Mot de passe"
          type = "password"
          placeholder="Entrer mot de passe"
          v-model="user.password"
        />
        <input-family
            label = "Votre email"
            type = "password"
            placeholder="Confirmer mot de passe"
            v-model="user.confirmPassword"
        />
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant"
            @click="moveToNextStep" 
          />
        </div>
        <transition name="fade">
          <p v-if="message.error" class="error__message">{{ message.error }}</p>
        </transition>
        <div class="divider"></div>
        <p>Conditions d'utilisations appliquées</p>
      </div>

      <!-- Étape 4 - Me connecter -->
      <div class="step" v-else-if="step === 4" key="step4">
        <h2 class="animated-title">Je me connecte</h2>
        <input-family
          label = "Nom d'utilisateur"
          type = "text"
          placeholder="Entrer un nom d'utilisateur"
          v-model="user.username"
        />
        <input-family
          label = "Mot de passe"
          type = "password"
          placeholder="Entrer mot de passe"
          v-model="user.password"
        />
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step=1" />
          <main-button 
            label="Suivant"
            @click="moveToNextStep" 
          />
        </div>
        <transition name="fade">
          <p v-if="message.error" class="error__message">{{ message.error }}</p>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import MainButton from '../button/mainButton.vue';
import SecondButton from '../button/secondButton.vue';
import inputFamily from '../tools/inputFamily.vue';

export default {
  name: 'DevisCreator',
  components: {
    MainButton,
    SecondButton,
    inputFamily,
  },
  setup() {
    const step = ref(1);
    
    /* About the user */
    const goToConnexion = () => {
      step.value = 4
    }

    const user = ref({
      username:"",
      email:"",
      password:"",
      confirmPassword: ""
    })

    const message = ref({
      error:"",
      succes:"",
    })

    const moveToNextStep = () => {
      // Réinitialise les messages d'erreur à chaque tentative
      message.value.error = "";
      
      if (step.value === 1) {
        step.value++;
      } else if (step.value === 2) {
        if (!user.value.username.trim()) {
          message.value.error = "Le nom d'utilisateur est requis.";
        } else if (!user.value.email.trim()) {
          message.value.error = "L'email est requis.";
        } else if (!isValidEmail(user.value.email)) {
          message.value.error = "Veuillez entrer un email valide.";
        } else {
          step.value++;
        }
      } else if (step.value === 3) {
        if (!user.value.password) {
          message.value.error = "Le mot de passe est requis.";
        } else if (user.value.password.length < 8) {
          message.value.error = "Le mot de passe doit faire au moins 8 caractères.";
        } else if (user.value.password !== user.value.confirmPassword) {
          message.value.error = "Les mots de passe ne correspondent pas.";
        } else {
          // Soumettre le formulaire ou passer à l'étape suivante
          console.log("Formulaire valide, prêt pour soumission", user.value);
          // step.value++; si tu as une étape 4
        }
      }
    };

    // Fonction utilitaire pour valider les emails
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return {
      step,
      goToConnexion,
      moveToNextStep,
      user,
      message
    };
  }
};
</script>

<style scoped>
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