<template>
    <section>
        <div class="center__flex__mobile my__form" v-if="step === 1">
            <div class="input__group ">
                <inputFamily label="Nom" placeholder="Entrer votre nom" type="text"></inputFamily>
                <selectFamily label="Tranche d'âge"></selectFamily>
            </div>
            <div class="input__group ">
                <selectFamily 
                    label="Situation professionnelle" 
                    :options="professionOptions" 
                    v-model="selectedProfession" 
                />
                <transition>
                    <inputFamily
                        v-if="selectedProfession === 'Autre'"
                        label="Précisez votre profession" 
                        placeholder="Votre profession" 
                        type="text"
                    />
                </transition>
            </div>
            <secondButton label="envoyer" type="submit" @click="incrementStep"></secondButton>
        </div>

        <div class="center__flex__mobile my__form" v-if="step === 2">
            <div class="input__group ">
                <selectFamily 
                    label="Où achetez-vous habituellement vos produits vivriers?"
                    :options="buyLocationOptions" 
                >
                </selectFamily>
                <selectFamily 
                    label="À quelle fréquence achetez-vous des produits vivriers ?"
                    :options="buyFrequencyOptions"
                >
                </selectFamily>
            </div>
            <div class="input__group ">
                <selectFamily 
                    label="Quel est votre budget moyen par semaine pour l'achat de produits vivriers ?" 
                    :options="buyBudgetOptions" 
                    v-model="selectedProfession" 
                />
                <transition>
                    <inputFamily
                        v-if="selectedProfession === 'Autre'"
                        label="Précisez votre profession" 
                        placeholder="Votre profession" 
                        type="text"
                    />
                </transition>
            </div>
            <secondButton label="envoyer" type="submit"></secondButton>
        </div>
    </section>
</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
import selectFamily from './selectFamily.vue';
import secondButton from '../button/secondButton.vue';
import { ref } from 'vue';
export default {
    
    components:{
        inputFamily, textAreaTool, mainButton, selectFamily, secondButton
    },

    setup(){
        const step = ref(1)
        
        const professionOptions = ['Etudiant', 'Salarié', 'Entrepreneur', 'Chômeur', 'Retraité', 'Autre']
        const selectedProfession = ref(''); // Stocke la valeur sélectionnée
        const buyLocationOptions = ['Supermarché', 'Marché local', 'En ligne', 'Magasin bio']
        const buyFrequencyOptions = ['Tous les jours', 'Plusieurs fois par semaine', 'Une fois par semaine', "Une fois chaque deux semaines", 'Une fois par mois', 'Rarement']
        const buyBudgetOptions = ['Moins de 5000 FCFA', '5 000 - 10 000 FCFA', '10 001 - 20 000 FCFA', 'Plus de 20 000 FCFA']
        const kindOfProductsOptions = ['Fruits', 'Légumes', 'Produits laitiers', 'Viande', 'Poisson', 'Produits bio', 'Produits locaux', 'Autre']
        
        function incrementStep() {
            step.value++;
        };

        return {
            step, professionOptions, selectedProfession, buyLocationOptions,
            buyFrequencyOptions, buyBudgetOptions, kindOfProductsOptions, 
            incrementStep, buyFrequencyOptions
        }
    }
}
</script>

<style scoped>

.my__form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
}

.input__group{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.about__email{
    width: 100%;
}

@media (min-width: 768px) {

    .input__group{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .my__footer{
        padding: 0 5rem;
    }
}

@media (min-width: 1024px) {

    .main__container{
        margin: 0 4rem;
    }

    .contact__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 100%;
    }

    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}

/* About transition*/

.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>