<template>
  <div class="submain__container center__flex__mobile">
    <transition name="fade" mode="out-in">
      <!-- Étape 1 - Démarrage -->
      <div class="step" v-if="step === 1" key="step1">
        <h2>Discussons ensemble</h2>
        <h4>
            Prenez part aux différents projets sur lesquelles
            nous travaillons et donnez vos points de vues.
        </h4>
        <div class="navigation-buttons">
          <second-button label="Je me connecte" @click="step--" />
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
        <!-- Étape 2 - Type de projet -->
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
              v-model="user.Password2"
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
    </transition>
  </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue';
import MainButton from '../button/mainButton.vue';
import SecondButton from '../button/secondButton.vue';
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
    SelectFamily,
    inputFamily,
    checkBoxTool,
    textAreaTool
  },
  setup() {

    const step = ref(1);
    
    /* About the user */

    const user = ref({
      username:"",
      email:"",
      password:"",
      Password2:""
    })

    const message = ref({
      error:"",
      succes:"",
    })

    const moveToNextStep = () => {
    if (step.value === 1) {
        step.value++;
        console.log(user.value); // Pensez à déplacer ce log vers un endroit plus pertinent si ce n'est pas pour le débogage
    } else if (step.value === 2) {
        if (user.value.username.trim() === "" || user.value.email.trim() === "") {
          message.value.error = "Nom d'utilisateur et/ou email sont vides. Veuillez les remplir."
          console.log("Nom d'utilisateur et/ou email sont vides. Veuillez les remplir.");
          // Optionnellement, définissez un état d'erreur ici pour afficher des messages dans l'interface utilisateur
        } else {
          step.value++; // Avancer seulement si valide
        }
    } else if (step.value === 3) {
        if (user.value.password.trim() === "" || user.value.Password2.trim() === "") { // Utiliser confirmPassword
          message.value.error = "Veuillez saisir et confirmer votre mot de passe."
          console.log("Veuillez saisir et confirmer votre mot de passe.");
        } else if (user.value.password !== user.value.Password2) { // Comparer avec confirmPassword
          message.value.error = "Les mots de passes ne concordent pas."
          console.log("Les mots de passes ne concordent pas.");
        } else {
            // Tout est bon, potentiellement passer à l'étape finale ou soumettre le formulaire
            console.log("Compte prêt à être créé !");
            // step.value++; // Décommenter pour passer à une étape suivante, ou déclencher la soumission
        }
    }
};

    return {
      step,
      moveToNextStep,
      user,
      message
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

.divider {
  height: 1px; /* L'épaisseur de votre ligne */
  width: 70%; /* La largeur de la ligne (ici, 100% de son conteneur) */
  background-color: #ccc; /* La couleur de la ligne (un gris clair) */
  margin: 20px 0; /* Marge au-dessus et en-dessous pour l'espacement */
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