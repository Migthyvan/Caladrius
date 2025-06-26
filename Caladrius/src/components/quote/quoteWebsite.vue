<template>
    <div class="main__container center__flex__mobile" >
        <navbar/>
        <!-- Site Web -->
        <transition :duration="{ enter: 1000, leave: 800 }" name="fade" mode="out-in">
          <div class="features-container" v-show="step === 1" key="step1">
            <h2> Devis pour site Web </h2>
            <selectFamily label="Je selectionne mon type de site" :options="type"
              v-model="myQuote.types"
            />
            <selectFamily
              label="Mon nombre de pages" :options="pageNumber" v-model="myQuote.pagesNumber"
            />
            <selectFamily
              label="Mon type de backend" :options="backend" v-model="myQuote.backend"
            />
            <checkBoxTool
              question="Fonctionnalités" :options="specific" v-model="myQuote.specific"
            />

            <div class="navigation-buttons">
              <secondButton label = "pécédent" @click="goToPrevStep"/>
              <mainButton label = "suivant" @click="goToNextStep"/>
            </div>
          </div>
        </transition>

        <!-- Site Web step 2-->
        <transition :duration="{ enter: 1000, leave: 800 }" name="fade" mode="out-in">

          <div class="features-container"  v-show="step === 2" key="step2">
            <h2> Vos informations personnelles </h2>
            <inputFamily label = "Votre nom" v-model=myQuote.name />
            <inputFamily label= "Email" v-model=myQuote.email />
            <inputFamily label ="Numéro de téléphone" v-model=myQuote.phone_number />
            <text-area-tool v-model="myQuote.message"/>
            <div class="navigation-buttons">
              <secondButton label = "pécédent" @click="goToPrevStep"/>
              <mainButton label = "suivant" @click="goToNextStep"/>
            </div>
          </div>
        </transition>
        
        <div class="price-display" v-if="totalPrice > 0">
          <h3>Estimation du prix: {{ totalPrice }} €</h3>
        </div>
        
        <transition :duration="{ enter: 1000, leave: 800 }" name="fade" mode="out-in">

        <!-- Site Web step 3 -->
          <div class="features-container" v-show="step === 3" key="step3">
            <h2>Récapitulatif de votre devis</h2>
            
            <div class="summary-section">
                <h3>Configuration de votre site</h3>
                <div class="summary-item">
                    <span class="summary-label">Type de site:</span>
                    <span class="summary-value">{{ myQuote.types || 'Non spécifié' }}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Nombre de pages:</span>
                    <span class="summary-value">{{ myQuote.pagesNumber || 'Non spécifié' }}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Backend:</span>
                    <span class="summary-value">{{ myQuote.backend || 'Non spécifié' }}</span>
                </div>
                <div class="summary-item" v-if="myQuote.specific && myQuote.specific.length > 0">
                  <span class="summary-label">Fonctionnalités:</span>
                  <span class="summary-value">{{ myQuote.specific.join(', ') }}</span>
                </div>
            </div>
              
            <div class="summary-section">
              <h3>Vos informations</h3>
              <div class="summary-item">
                  <span class="summary-label">Nom:</span>
                  <span class="summary-value">{{ myQuote.name || 'Non spécifié' }}</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">Email:</span>
                  <span class="summary-value">{{ myQuote.email || 'Non spécifié' }}</span>
              </div>
              <div class="summary-item">
                  <span class="summary-label">Téléphone:</span>
                  <span class="summary-value">{{ myQuote.phone_number || 'Non spécifié' }}</span>
              </div>
              <div class="summary-item" v-if="myQuote.message">
                  <span class="summary-label">Message:</span>
                  <span class="summary-value">{{ myQuote.message }}</span>
              </div>
            </div>
              
              
            <div class="summary-section price-section">
              <h3>Prix total</h3>
              <div class="total-price">
                  {{ totalPrice }} €
              </div>
              <p class="price-note">Ce prix est une estimation et pourra être ajusté après discussion.</p>
            </div>
            
            <div class="navigation-buttons">
              <secondButton label="Précédent" @click="goToPrevStep"/>
              <second-button label="Télécharger PDF" @click="myPdf" class="pdf-button" />
              <mainButton label="Envoyer" @click="submitQuote"/>
            </div>
          </div>
        </transition>
  </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import selectFamily from '../tools/selectFamily.vue';
import checkBoxTool from '../tools/checkBoxTool.vue';
import mainButton from '../button/mainButton.vue';
import SecondButton from '../button/secondButton.vue';
import { ref, computed } from 'vue';
import InputFamily from '../tools/inputFamily.vue';
import TextAreaTool from '../tools/textAreaTool.vue';
import { types, pagesNumber, specifics, backends, calculateQuote } from './quote';
import { generateDevisPDF } from './pdfQuoteGenerator';

export default {
    components: {
      navbar, selectFamily, checkBoxTool, mainButton, SecondButton, InputFamily,
      TextAreaTool
    },

    setup() {
        
      /* About the differents steps */
        const step = ref(1);
        const goToNextStep = () => {
            if (step.value === 1 && !myQuote.value.types) {
                alert("Veuillez sélectionner un type de site");
                return;
            }
            step.value++;
        };
        const goToPrevStep = () => {
            step.value--;
        }

        /* About the quote */
        const myQuote = ref({
          name: "",
          email: "",
          phone_number: "",
          message: "",
          types: "",
          pagesNumber: "",
          backend: "",
          specific: [],
        })

        // Calcul du prix total
        const totalPrice = computed(() => {
          return calculateQuote(
            myQuote.value.types,
            myQuote.value.pagesNumber,
            myQuote.value.backend,
            myQuote.value.specific
          );
        });

        const type = types;
        const pageNumber = pagesNumber;
        const backend = backends;
        const specific = specifics;

        // Generate my pdf file
        const myPdf = generateDevisPDF({
          clientName: myQuote.value.name,
          projecType: myQuote.value.types,
          pageCount: myQuote.value.pagesNumber,
          selectedOptions: myQuote.value.specific,
        })

        return {
          step,
          goToPrevStep,
          goToNextStep,
          myQuote,
          type,
          pageNumber,
          backend,
          specific,
          totalPrice,
          myPdf,
        }
    }
}
</script>

<style scoped>
.pdf-button {
  background-color: #213597e8 !important;
}
.pdf-button:hover {
  background-color:#213597e8 !important;
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

.features-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.navigation-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
}

.fade-enter-active {
  transition: 
  opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
  transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-leave-active {
  transition: 
    opacity 0.8s cubic-bezier(0.55, 0, 0.1, 1),
    transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from {
  opacity: 0;
  transition-duration: 1.2s;
  transform: translateX(24px) scale(0.98);
  filter: blur(1px);
}

.fade-leave-to {
  opacity: 0;
  transition-duration: 1.2s;
  transform: translateX(-24px) scale(1.01);
  filter: blur(1px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transition-duration: 1.2s;
  transform: translateX(0) scale(1);
  filter: blur(0);
}

.summary-section {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 500px;
}

.summary-section h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.summary-item {
  display: flex;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
}

.summary-label {
  font-weight: bold;
  color: #f3f3f3;
  width: 150px;
  flex-shrink: 0;
}

.summary-value {
  color: #f3f3f3;
  flex-grow: 1;
}

.price-section {
    text-align: center;
}

.total-price {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin: 1rem 0;
}

.price-note {
  color: #f3f3f3;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}

@media (min-width: 768px) {

  h2{
    text-align: center;
  }

  .summary-item {
    display: flex;
    flex-direction: column;
  }
  
  .summary-label {
    width: 100%;
    margin-bottom: 0.3rem;
  }

  .price-display{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .features-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>