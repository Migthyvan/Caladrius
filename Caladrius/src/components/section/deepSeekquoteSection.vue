<template>
    <div class="devis-container">
      <h1>Devis pour Création de Site Web & Application Mobile</h1>
      
      <!-- Étape 1: Sélection du type de service -->
      <div v-if="etape === 1" class="service-selection">
        <h2>Choisissez votre type de service</h2>
        <div class="service-options">
          <div 
            v-for="service in services" 
            :key="service.id" 
            class="service-card"
            :class="{ 'selected': selectedService === service.id }"
            @click="selectService(service.id)"
          >
            <h3>{{ service.nom }}</h3>
            <p>{{ service.description }}</p>
            <div class="price-range">À partir de {{ service.prixMin }} €</div>
          </div>
        </div>
        
        <button 
          @click="nextStep" 
          class="btn btn-primary"
          :disabled="!selectedService"
        >
          Suivant
        </button>
      </div>
      
      <!-- Étape 2: Détails du devis -->
      <div v-if="etape === 2" class="devis-details">
        <div class="section">
          <h2>Votre sélection : {{ currentService.nom }}</h2>
          <button @click="etape = 1" class="btn btn-outline-secondary btn-sm">
            Modifier
          </button>
        </div>
        
        <!-- Options spécifiques au service -->
        <div class="section">
          <h3>Options</h3>
          
          <!-- Options pour site web -->
          <div v-if="selectedService === 'site-web'">
            <div class="form-group">
              <label>Type de site :</label>
              <select v-model="options.typeSite" class="form-control">
                <option value="vitrine">Site vitrine</option>
                <option value="ecommerce">Site e-commerce</option>
                <option value="corporate">Site corporate</option>
                <option value="custom">Site sur mesure</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Nombre de pages :</label>
              <input 
                v-model.number="options.nbPages" 
                type="number" 
                min="1" 
                class="form-control"
              >
            </div>
            
            <div class="form-group">
              <label>
                <input 
                  v-model="options.responsive" 
                  type="checkbox" 
                > Design responsive (mobile)
              </label>
            </div>
            
            <div class="form-group">
              <label>
                <input 
                  v-model="options.seo" 
                  type="checkbox" 
                > Optimisation SEO de base
              </label>
            </div>
          </div>
          
          <!-- Options pour application mobile -->
          <div v-if="selectedService === 'app-mobile'">
            <div class="form-group">
              <label>Plateforme :</label>
              <select v-model="options.plateformes" multiple class="form-control">
                <option value="ios">iOS</option>
                <option value="android">Android</option>
                <option value="cross">Cross-platform (Flutter/React Native)</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Type d'application :</label>
              <select v-model="options.typeApp" class="form-control">
                <option value="utilitaire">Utilitaire</option>
                <option value="sociale">Réseau social</option>
                <option value="jeu">Jeu mobile</option>
                <option value="entreprise">Application d'entreprise</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>
                <input 
                  v-model="options.backend" 
                  type="checkbox" 
                > Développement backend inclus
              </label>
            </div>
          </div>
          
          <!-- Options communes -->
          <div class="form-group">
            <label>Délai souhaité (semaines) :</label>
            <input 
              v-model.number="options.delai" 
              type="number" 
              min="1" 
              class="form-control"
            >
          </div>
          
          <div class="form-group">
            <label>Notes supplémentaires :</label>
            <textarea 
              v-model="options.notes" 
              class="form-control" 
              rows="3"
            ></textarea>
          </div>
        </div>
        
        <!-- Informations client -->
        <div class="section">
          <h3>Informations Client</h3>
          <div class="form-group">
            <label>Nom :</label>
            <input v-model="client.nom" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label>Email :</label>
            <input v-model="client.email" type="email" class="form-control">
          </div>
          <div class="form-group">
            <label>Téléphone :</label>
            <input v-model="client.telephone" type="tel" class="form-control">
          </div>
        </div>
        
        <!-- Récapitulatif et total -->
        <div class="section">
          <h3>Récapitulatif</h3>
          <div class="recap">
            <p><strong>Service :</strong> {{ currentService.nom }}</p>
            <p><strong>Options :</strong></p>
            <ul>
              <li v-for="(value, key) in options" :key="key">
                {{ formatOption(key) }}: <strong>{{ formatValue(value) }}</strong>
              </li>
            </ul>
            <div class="total">
              <strong>Estimation :</strong> {{ estimation }} €
              <small>(prix final à confirmer après étude détaillée)</small>
            </div>
          </div>
        </div>
        
        <!-- Boutons d'action -->
        <div class="actions">
          <button @click="genererDevis" class="btn btn-success">
            Générer le devis
          </button>
          <button @click="resetDevis" class="btn btn-secondary">
            Annuler
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        etape: 1,
        selectedService: null,
        services: [
          {
            id: 'site-web',
            nom: 'Site Web',
            description: 'Création de site internet sur mesure',
            prixMin: 1500
          },
          {
            id: 'app-mobile',
            nom: 'Application Mobile',
            description: 'Développement d\'application iOS/Android',
            prixMin: 5000
          },
          {
            id: 'full',
            nom: 'Solution Complète',
            description: 'Site web + application mobile intégrés',
            prixMin: 8000
          }
        ],
        options: {
          typeSite: 'vitrine',
          nbPages: 5,
          responsive: true,
          seo: false,
          plateformes: ['android'],
          typeApp: 'utilitaire',
          backend: false,
          delai: 4,
          notes: ''
        },
        client: {
          nom: '',
          email: '',
          telephone: ''
        }
      }
    },
    computed: {
      currentService() {
        return this.services.find(s => s.id === this.selectedService) || {}
      },
      estimation() {
        let base = this.currentService.prixMin
        
        // Calcul pour site web
        if (this.selectedService === 'site-web') {
          if (this.options.typeSite === 'ecommerce') base *= 1.8
          if (this.options.typeSite === 'custom') base *= 2.5
          base += this.options.nbPages * 100
          if (this.options.seo) base += 500
        }
        
        // Calcul pour app mobile
        if (this.selectedService === 'app-mobile') {
          if (this.options.plateformes.includes('cross')) base *= 1.3
          else if (this.options.plateformes.length > 1) base *= 1.5
          if (this.options.typeApp === 'sociale') base *= 1.8
          if (this.options.typeApp === 'jeu') base *= 2
          if (this.options.backend) base += 3000
        }
        
        // Calcul pour solution complète
        if (this.selectedService === 'full') {
          base += this.options.nbPages * 150
          if (this.options.backend) base += 5000
        }
        
        // Ajustement pour délai court
        if (this.options.delai < 3) base *= 1.5
        if (this.options.delai < 2) base *= 2
        
        return Math.round(base / 100) * 100 // Arrondi aux centaines
      }
    },
    methods: {
      selectService(id) {
        this.selectedService = id
        this.resetOptions()
      },
      resetOptions() {
        this.options = {
          typeSite: 'vitrine',
          nbPages: this.selectedService === 'site-web' ? 5 : 10,
          responsive: true,
          seo: false,
          plateformes: this.selectedService === 'app-mobile' ? ['android'] : [],
          typeApp: 'utilitaire',
          backend: false,
          delai: 4,
          notes: ''
        }
      },
      nextStep() {
        if (this.selectedService) this.etape = 2
      },
      formatOption(key) {
        const map = {
          typeSite: 'Type de site',
          nbPages: 'Nombre de pages',
          responsive: 'Responsive',
          seo: 'SEO',
          plateformes: 'Plateformes',
          typeApp: 'Type d\'application',
          backend: 'Backend inclus',
          delai: 'Délai',
          notes: 'Notes'
        }
        return map[key] || key
      },
      formatValue(value) {
        if (Array.isArray(value)) return value.join(', ')
        if (typeof value === 'boolean') return value ? 'Oui' : 'Non'
        return value
      },
      genererDevis() {
        const devis = {
          service: this.currentService,
          options: this.options,
          client: this.client,
          estimation: this.estimation,
          date: new Date().toLocaleDateString()
        }
        
        console.log('Devis généré:', devis)
        alert(`Devis généré pour ${this.client.nom} (${this.estimation} €)\nÀ implémenter: envoi par email/génération PDF`)
      },
      resetDevis() {
        this.etape = 1
        this.selectedService = null
        this.resetOptions()
        this.client = {
          nom: '',
          email: '',
          telephone: ''
        }
      }
    }
}
</script>

<style scoped>
.devis-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #111111;
    color: #ffffff;
    min-height: 100vh;
}

.service-selection {
    text-align: center;
}

.service-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 0;
}

.service-card {
    border: 2px solid #2b92ff;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #1a1a1a;
}

.service-card:hover {
    border-color: #4aa8ff;
    box-shadow: 0 0 15px rgba(43, 146, 255, 0.5);
}

.service-card.selected {
    border-color: #2b92ff;
    background-color: #1e2a3a;
    box-shadow: 0 0 20px rgba(43, 146, 255, 0.7);
}

.service-card h3 {
    color: #2b92ff;
    margin-top: 0;
}

.price-range {
    font-weight: bold;
    color: #2b92ff;
    margin-top: 15px;
}

.section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #2b92ff;
    border-radius: 5px;
    background-color: #1a1a1a;
}

.form-group {
    margin-bottom: 15px;
}

label {
    color: #ffffff;
    display: block;
    margin-bottom: 5px;
}

.form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #2b92ff;
    border-radius: 4px;
    background-color: #222222;
    color: #ffffff;
}

select.form-control[multiple] {
    height: auto;
}

.recap {
    padding: 15px;
    background-color: #1e2a3a;
    border-radius: 5px;
    border: 1px solid #2b92ff;
}

.total {
    font-size: 1.3em;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid #2b92ff;
    color: #2b92ff;
}

.actions {
    margin-top: 20px;
    text-align: center;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s;
    font-weight: bold;
}

.btn-primary {
    background-color: #2b92ff;
    color: white;
}

.btn-primary:hover {
    background-color: #4aa8ff;
    box-shadow: 0 0 10px rgba(43, 146, 255, 0.7);
}

.btn-success {
    background-color: #28a745;
    color: white;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}

.btn-outline-secondary {
    background-color: transparent;
    border: 1px solid #6c757d;
    color: #6c757d;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

input[type="checkbox"] {
    accent-color: #2b92ff;
    margin-right: 8px;
}

@media (max-width: 768px) {
    .service-options {
        flex-direction: column;
        align-items: center;
    }
    
    .service-card {
        width: 100%;
    }
}
</style>