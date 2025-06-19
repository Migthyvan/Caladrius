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
        <choices-box 
          :modelValue="quote.type"
          @selected="handleSelectedItem" />
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
        <h3>Configuration pour {{ projectType }}</h3>
        
        <!-- Site Web -->
        <div v-if="projectType === 'Site web'" class="features-container">
          <selectFamily
            v-for="([key, options], index) in Object.entries(projectFeatures['Site web']).slice(0, 3)"
            :key="index"
            :label="labels['Site web'][key]"
            :options="options"
            @update:modelValue="(value) => handleSelectedFeature(key, value)"
          />
          <checkBoxTool
            :question="labels['Site web']['specific']"
            :options="projectFeatures['Site web']['specific']"
            @update:modelValue="(value) => handleSelectedFeature('specific', value)"
          />
        </div>
        
        <!-- Application Mobile -->
        <div v-else-if="projectType === 'Application mobile'" class="features-container">
          <selectFamily
            v-for="(options, key) in projectFeatures['Application mobile']"
            :key="key"
            :label="labels['Application mobile'][key]"
            :options="options"
            @update:modelValue="(value) => handleSelectedFeature(key, value)"
          />
        </div>
        
        <!-- Service Freelance -->
        <div v-else-if="projectType === 'Service Freelance'" class="features-container">
          <selectFamily
            v-for="(options, key) in projectFeatures['Service Freelance']"
            :key="key"
            :label="labels['Service Freelance'][key]"
            :options="options"
            @update:modelValue="(value) => handleSelectedFeature(key, value)"
          />
        </div>

        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Suivant" 
            @click="moveToNextStep" 
            :disabled="!isFeaturesValid"
          />
        </div>
      </div>

      <!-- Étape 4 - Informations personnelles -->
      <div class="step" v-else-if="step === 4" key="step4">
        <h3>Informations personnelles</h3>
        <div class="information-container">
          <input-family
            v-for="([label, key], index) in Object.entries({ 
              'Nom': 'nom', 
              'Email': 'email', 
              'Téléphone': 'telephone' 
            })"
            :key="index"
            :label="label"
            :placeholder="`Entrez votre ${label}`"
            v-model="informations[key]"
            :required="true"
            :type="key === 'email' ? 'email' : key === 'telephone' ? 'tel' : 'text'"
          />
          <text-area-tool
            :label="labels['message']"
            v-model="informations.message"
            placeholder="Décrivez brièvement votre projet..."
          />
        </div>
        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Voir le devis" 
            @click="generateQuote" 
            :disabled="!isFormValid"
          />
        </div>
      </div>

      <!-- Étape 5 - Récapitulatif et estimation -->
      <div class="step" v-else-if="step === 5" key="step5">
        <div class="quote-summary">
          <h2>Votre devis estimatif</h2>
          <div class="quote-details">
            <div class="quote-section">
              <h3>Informations personnelles</h3>
              <p><strong>Nom :</strong> {{ quote.nom }}</p>
              <p><strong>Email :</strong> {{ quote.email }}</p>
              <p><strong>Téléphone :</strong> {{ quote.telephone }}</p>
              <p v-if="quote.message"><strong>Message :</strong> {{ quote.message }}</p>
            </div>

            <div class="quote-section">
              <h3>Détails du projet</h3>
              <p><strong>Type de projet :</strong> {{ quote.type }}</p>
              
              <div v-for="(value, key) in quote.details" :key="key">
                <p><strong>{{ formatLabel(key) }} :</strong> {{ formatFeatureValue(value) }}</p>
              </div>
            </div>

            <div class="quote-section price-estimation">
              <h3>Estimation</h3>
              <div class="price-breakdown">
                <div v-for="(item, index) in priceBreakdown" :key="index" class="price-item">
                  <span>{{ item.label }}</span>
                  <span>{{ formatPrice(item.price) }}</span>
                </div>
              </div>
              <div class="total-price">
                <strong>Total estimé :</strong>
                <strong>{{ formatPrice(totalPrice) }}</strong>
              </div>
              <p class="disclaimer">* Ceci est une estimation indicative. Un devis précis vous sera envoyé après analyse de votre projet.</p>
            </div>
          </div>
        </div>

        <div class="navigation-buttons">
          <second-button label="Précédent" @click="step--" />
          <main-button 
            label="Envoyer la demande" 
            @click="submitQuote" 
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

// Prix de base pour chaque type de projet
const BASE_PRICES = {
  'Site web': 500,
  'Application mobile': 1499,
  'Service Freelance': 500
};

// Multiplicateurs pour les options
const PRICE_MULTIPLIERS = {
  'Site web': {
    type: {
      'Site vitrine': 1,
      'Site e-commerce': 1.8,
      'Site blog': 1.2,
      'Site portfolio': 1.1
    },
    pages: {
      '1-5 pages': 1,
      '5-10 pages': 1.5,
      'Plus de 10 pages': 2
    },
    backend: {
      'Léger': 1,
      'Moyen': 1.3,
      'Robuste': 1.7
    },
    specific: {
      'SEO': 300,
      'Blog intégré': 200,
      'Multilingue': 400
    }
  },
  'Application mobile': {
    platform: {
      'iOS': 1,
      'Android': 1,
      'Cross-platform': 1.2
    },
    features: {
      'Notifications push': 1.5,
      'Paiement in-app': 2.5,
      'Géolocalisation': 3
    },
    backend: {
      'Firebase': 1,
      'API personnalisée': 1.5,
      'Sans backend': 0.8
    }
  },
  'Service Freelance': {
    service: {
      'Développement': 1.5,
      'Design': 1,
      'Rédaction': 0.8,
      'Consultance': 1.2
    },
    duration: {
      '1 semaine': 1,
      '1 mois': 3.5,
      '3 mois': 10,
      'Projet continu': 15
    },
    expertise: {
      'Débutant': 0.7,
      'Intermédiaire': 1,
      'Expert': 1.5
    }
  }
};

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
    const selectedFeatures = ref({});

    const projectFeatures = {
      'Site web': {
        type: ['Site vitrine', 'Site e-commerce', 'Site blog', 'Site portfolio'],
        pages: ['1-5 pages', '5-10 pages', 'Plus de 10 pages'],
        backend: ['Léger', 'Moyen', 'Robuste'],
        specific: ['SEO', 'Blog intégré', 'Multilingue'],
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
    };

    const labels = {
      'Site web': {
        type: 'Type de site web',
        pages: 'Nombre de pages',
        backend: 'Solution backend',
        specific: 'Fonctionnalités spécifiques',
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
      },
      message: 'Votre message'
    };

    const informations = ref({
      nom: '',
      email: '',
      telephone: '',
      message: ''
    });

    const quote = ref({
      nom: '',
      email: '',
      telephone: '',
      message: '',
      type: '',
      details: {}
    });

    // Calcul de l'estimation du prix
    const priceBreakdown = computed(() => {
      if (!projectType.value) return [];
      
      const breakdown = [];
      const basePrice = BASE_PRICES[projectType.value];
      
      // Ajout du prix de base
      breakdown.push({
        label: `Projet ${projectType.value}`,
        price: basePrice
      });
      
      // Calcul des options supplémentaires
      for (const [key, value] of Object.entries(selectedFeatures.value)) {
        const multipliers = PRICE_MULTIPLIERS[projectType.value][key];
        
        if (Array.isArray(value)) {
          // Pour les cases à cocher (valeurs multiples)
          value.forEach(item => {
            const price = multipliers[item];
            if (price) {
              breakdown.push({
                label: `${formatLabel(key)}: ${item}`,
                price: key === 'specific' || key === 'features' ? price : basePrice * (price - 1)
              });
            }
          });
        } else {
          // Pour les sélections uniques
          const multiplier = multipliers[value];
          if (multiplier) {
            breakdown.push({
              label: `${formatLabel(key)}: ${value}`,
              price: basePrice * (multiplier - 1)
            });
          }
        }
      }
      
      return breakdown;
    });

    // Calcul du prix total
    const totalPrice = computed(() => {
      return priceBreakdown.value.reduce((total, item) => total + item.price, 0);
    });

    // Validation du formulaire
    const isFormValid = computed(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        informations.value.nom.trim() !== '' &&
        informations.value.email.trim() !== '' &&
        emailRegex.test(informations.value.email) &&
        informations.value.telephone.trim() !== ''
      );
    });

    const isFeaturesValid = computed(() => {
      return Object.keys(selectedFeatures.value).length > 0;
    });

    const moveToNextStep = () => {
      step.value++;
    };

    const handleSelectedItem = (item) => {
      projectType.value = item.title;
      selectedFeatures.value = {};
      quote.value.type = item.title;
    };

    const handleSelectedFeature = (key, value) => {
      selectedFeatures.value = {
        ...selectedFeatures.value,
        [key]: value
      };
    };

    const generateQuote = () => {
      if (!isFormValid.value) {
        alert('Veuillez remplir tous les champs obligatoires correctement');
        return;
      }
      
      // Mise à jour des informations personnelles
      quote.value = {
        ...quote.value,
        nom: informations.value.nom,
        email: informations.value.email,
        telephone: informations.value.telephone,
        message: informations.value.message || '',
        type: projectType.value,
        details: { ...selectedFeatures.value }
      };
      
      moveToNextStep();
    };

    const submitQuote = () => {
      // Ici vous pourriez ajouter la logique pour envoyer le devis
      console.log('Devis envoyé:', quote.value);
      alert('Votre demande de devis a été envoyée avec succès !');
      
      // Réinitialisation du formulaire
      resetForm();
    };

    const resetForm = () => {
      step.value = 1;
      projectType.value = '';
      selectedFeatures.value = {};
      informations.value = {
        nom: '',
        email: '',
        telephone: '',
        message: ''
      };
      quote.value = {
        nom: '',
        email: '',
        telephone: '',
        message: '',
        type: '',
        details: {}
      };
    };

    const formatLabel = (key) => {
      if (!projectType.value) return key;
      return labels[projectType.value][key] || key;
    };

    const formatFeatureValue = (value) => {
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      return value;
    };

    const formatPrice = (price) => {
      return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
    };

    return {
      step,
      projectType,
      projectFeatures,
      labels,
      informations,
      quote,
      priceBreakdown,
      totalPrice,
      isFormValid,
      isFeaturesValid,
      moveToNextStep,
      handleSelectedItem,
      handleSelectedFeature,
      generateQuote,
      submitQuote,
      formatLabel,
      formatFeatureValue,
      formatPrice
    };
  }
};
</script>

<style scoped>
.features-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

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

.information-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.quote-summary {
  width: 100%;
  background: rgba(8, 8, 8, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.quote-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quote-section {
  padding: 1rem;
  border-bottom: 1px solid #0d04f8;
}

.quote-section:last-child {
  border-bottom: none;
}

.price-estimation {
  background: #037df7;
  border-radius: 10px;
  padding: 1.5rem;
}

.price-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 1rem 0;
}

.price-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #ddd;
}

.price-item:last-child {
  border-bottom: none;
}

.total-price {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #ddd;
  font-size: 1.2rem;
}

.disclaimer {
  font-size: 0.8rem;
  color: #5f04fc;
  margin-top: 1.5rem;
  font-style: italic;
  text-align: center;
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
  
  .features-container {
    width: 80%;
  }

  .information-container {
    width: 80%;
  }
  
  .quote-summary {
    padding: 2rem;
  }
  
  .quote-details {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .quote-section {
    flex: 1;
    min-width: 300px;
    max-width: calc(50% - 1rem);
  }
  
  .price-estimation {
    flex-basis: 100%;
  }
}

@media (min-width: 1024px) {
  .main__container {
    padding: 4rem 2rem 2rem 2rem;
  }
  
  .step {
    padding-top: 2rem;
  }
  
  .quote-section {
    max-width: calc(33% - 1rem);
  }
}
</style>