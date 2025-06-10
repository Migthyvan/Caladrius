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
        <choices-box @selected="handleSelectedItem" />
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant" 
            @click="moveToNextStep"
            :disabled="!projectType" 
          />
        </div>
      </div>

      <!-- Étape 3 - Configuration spécifique -->
      <div class="step" v-else-if="step === 3" key="step3">
        <h2 class="animated-title">Je crée mon devis gratuitement</h2>
        <h3>Configuration pour {{ projectType }}</h3>
        
        <!-- Site Web -->
        <div v-if="projectType === 'Site web'" class="features-container">
          <selectFamily
            v-for="(options, key) in projectFeatures['Site web']"
            :key="key"
            :label="labels['Site web'][key]"
            :options="options"
            @update:modelValue="handleSelectedFeature"
          />
        </div>
        
        <!-- Application Mobile -->
        <div v-else-if="projectType === 'Application mobile'" class="features-container">
          <selectFamily
            v-for="(options, key) in projectFeatures['Application mobile']"
            :key="key"
            :label="labels['Application mobile'][key]"
            :options="options"
            @update:modelValue="handleSelectedFeature"
          />
        </div>
        
        <!-- Service Freelance -->
        <div v-else-if="projectType === 'Service Freelance'" class="features-container">
          <selectFamily
            v-for="(options, key) in projectFeatures['Service Freelance']"
            :key="key"
            :label="labels['Service Freelance'][key]"
            :options="options"
            @update:modelValue="handleSelectedFeature"
          />
        </div>

        <!-- Informations personnelles -->

        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant" 
            @click="moveToNextStep" 
          />
        </div>
      </div>

      <!-- Étape 4 - Informations personnelles -->
      <div class="step" v-else-if="step === 4" key="step4">
        <h2 class="animated-title">Je crée mon devis gratuitement</h2>
        <h3>Informations personnelles</h3>
        <div class="information-container" v-if="step === 4">
          <input-family
            v-for="(value, key) in informations"
            :key="key"
            :label="key"
            :placeholder="`Entrez votre ${key}`"
            v-model="informations[key]"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import MainButton from '../button/mainButton.vue';
import SecondButton from '../button/secondButton.vue';
import ChoicesBox from '../tools/choicesBox.vue';
import SelectFamily from '../tools/selectFamily.vue';
import inputFamily from '../tools/inputFamily.vue';

export default {
  name: 'DevisCreator',
  components: {
    MainButton,
    SecondButton,
    ChoicesBox,
    SelectFamily,
    inputFamily
  },
  setup() {
    const step = ref(1);
    const projectType = ref('');
    const featureType = ref(false);
    const selectedFeatures = ref({});

    const projectFeatures = ref({
      'Site web': {
        type: ['Site vitrine', 'Site e-commerce', 'Site blog', 'Site portfolio'],
        pages: ['1-5 pages', '5-10 pages', 'Plus de 10 pages'],
        specific: ['SEO', 'Blog intégré', 'Multilingue'],
        backend: ['Léger', 'Moyen', 'Robuste']
      },
      'Application mobile': {
        platform: ['iOS', 'Android', 'Cross-platform'],
        features: ['Notifications push', 'Paiement in-app', 'Géolocalisation'],
        backend: ['Firebase', 'API personnalisée', 'Sans backend']
      },
      'Service Freelance': {
        service: ['Développement', 'Design', 'Rédaction', 'Consultance'],
        duration: ['1 semaine', '1 mois', '3 mois', 'Projet continu'],
        expertise: ['Débutant', 'Intermédiaire', 'Expert']
      }
    });

    const labels = ref({
      'Site web': {
        type: 'Type de site web',
        pages: 'Nombre de pages',
        specific: 'Fonctionnalités spécifiques',
        backend: 'Solution backend'
      },
      'Application mobile': {
        platform: 'Plateforme cible',
        features: 'Fonctionnalités principales',
        backend: 'Solution backend'
      },
      'Service Freelance': {
        service: 'Type de service',
        duration: 'Durée estimée',
        expertise: 'Niveau d\'expertise requis'
      }
    });

    const informations = ref({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const moveToNextStep = () => {
      if ((step.value === 2 && !projectType.value) || (step.value === 3 && !featureType.value)) {
        console.log('Veuillez sélectionner un type de projet et des fonctionnalités');
        return;
      };
      console.log('Passage à l\'étape suivante');
      step.value++;
    };

    const handleSelectedItem = (item) => {
      projectType.value = item.title;
      selectedFeatures.value = {}; // Réinitialise les features
      featureType.value = false;
    };

    const handleSelectedFeature = (feature) => {
      selectedFeatures.value = {
        ...selectedFeatures.value,
        [feature.label]: feature.value
      };
      featureType.value = Object.keys(selectedFeatures.value).length > 0;
      console.log('Features sélectionnées:', selectedFeatures.value);
    };

    return {
      step,
      projectType,
      featureType,
      projectFeatures,
      labels,
      moveToNextStep,
      handleSelectedItem,
      handleSelectedFeature,
      informations
    };
  }
};
</script>

<style>
/* ... (vos styles existants) ... */

.features-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.main__container {
  padding: 4rem 1rem 1rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
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
  h2 , h4 {
    width: 100%;
    text-align: center;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .features-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>