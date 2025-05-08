<template>
    <section>
        <div class="center__flex__mobile my__form" v-if="step === 1">
            <div class="input__group ">
                <inputFamily label="Nom" placeholder="Entrer votre nom" type="text"></inputFamily>
                <selectFamily label="Tranche d'âge"></selectFamily>
            </div>
            <div class="input__group">
                <inputFamily label="Numéro de téléphone" placeholder="Entrer votre numéro de téléphone" type="text"></inputFamily>
                <inputFamily label="Email" placeholder="Entrer votre email" type="email"></inputFamily>
            </div>
            <div class="input__group ">
                <selectFamily 
                    label="Situation professionnelle" 
                    :options="professionOptions" 
                    v-model="selectedProfession" 
                />
                <inputFamily label="Situation géographique" placeholder="Entrer votre commune" type="text"></inputFamily>
                <transition>
                    <inputFamily
                        v-if="selectedProfession === 'Autre'"
                        label="Précisez votre profession" 
                        placeholder="Votre profession" 
                        type="text"
                    />
                </transition>
            </div>
            <div class="about__btn">
                <nextButton label="Suivant" type="submit" @click="incrementStep"/>
            </div>
        </div>

        <div class="center__flex__mobile my__form" v-if="step === 2">
            <div class="input__group ">
                <selectFamily 
                    label="De quelle manière achetez-vous habituellement vos produits vivriers ?"
                    :options="buyLocationOptions" 
                >
                </selectFamily>
               <inputFamily label="Dans quelle commune faites-vous vos courses de produits vivriers ?" placeholder="Préciser la commune" type="text"></inputFamily>
            </div>
            <div class="input__group ">
                <selectFamily 
                    label="Quel est votre budget moyen pour l'achat de produits vivriers ?" 
                    :options="buyBudgetOptions" 
                    v-model="choiceValue" 
                />
                 <selectFamily 
                    label="À quelle fréquence achetez-vous des produits vivriers ?"
                    :options="buyFrequencyOptions"
                >
                </selectFamily>
            </div>
            <div class="about__btn">
                <prevButton label = "Précédent" @click="decrement"/>
                <nextButton label="Suivant" type="submit" @click="incrementStep"/>
            </div>
        </div>

        <div class="center__flex__mobile my__form" v-if="step === 3">
            <checkBoxTool 
                v-model="choiceValue" 
                :options="kindOfProductsOptions"
            />
            <transition>
                <inputFamily
                    v-if="choiceValue.includes('Autre')"
                    label="Précisez votre profession" 
                    placeholder="Votre profession" 
                    type="text"
                />
            </transition>
            <div class="about__btn">
                <prevButton label="précédent" @click="decrement"/>
                <nextButton label="suivant" type="submit" @click="incrementStep"/>
            </div>        
        </div>

        <div class="center__flex__mobile my__form" v-if="step === 4">
            <selectFamily 
                label="Seriez-vous intéressé(e) par une application mobile pour vous faire livrer des produits vivriers à domicile ?"
                :options="kindOfInterestOptions" 
            />
            <checkBoxTool 
            question="Quels seraient les avantages les plus importants pour vous d'utiliser une telle application ?"
            :options="kindOfAvantagesOptions" 
            />
            <checkBoxTool 
            question="Quels types de produits aimeriez-vous pouvoir commander via une telle application ?"
            :options="kindOfProductsOptions" 
            />
            <div class="about__btn">
                <prevButton label = "précédent" @click="decrement"/>
                <nextButton label="suivant" type="submit" @click="incrementStep"/>
            </div>
        </div>

        <div class="center__flex__mobile my__form" v-if="step === 5">
            <selectFamily 
                label="Quel serait le délai de livraison idéal pour vous ?"
                :options="deliveryDurationOptions" 
            />
            <selectFamily 
                label="Quel serait le montant de frais de livraison que vous seriez prêt(e) à payer ?"
                :options="deliveryCostOptions" 
            />
            <textAreaTool 
                label="Avez-vous d'autres commentaires ou suggestions concernant une application de livraison de produits vivriers ?"
                placeholder="Vos commentaires"
            />
            <div class="about__btn">
                <prevButton label = "précédent" @click="decrement"/>
                <nextButton label="suivant" type="submit" @click="incrementStep"/>
            </div>        
        </div>
    </section>
</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
import selectFamily from './selectFamily.vue';
import secondButton from '../button/secondButton.vue';
import prevButton from '../button/prevButton.vue';
import nextButton from '../button/nextButton.vue';
import checkBoxTool from './checkBoxTool.vue';
import { ref } from 'vue';
export default {
    
    components:{
        inputFamily, textAreaTool, mainButton, selectFamily, secondButton, checkBoxTool, prevButton,
        nextButton
    },

    setup(){
        const step = ref(1)
        
        const professionOptions = ['Etudiant', 'Salarié', 'Entrepreneur', 'Chômeur', 'Retraité', 'Autre']
        const selectedProfession = ref(''); // Stocke la valeur sélectionnée
        const buyLocationOptions = ['Au supermarché', 'Au marché local', 'En ligne', 'En magasin bio']
        const buyFrequencyOptions = ['Tous les jours', 'Plusieurs fois par semaine', 'Une fois par semaine', "Une fois chaque deux semaines", 'Une fois par mois', 'Rarement']
        const buyBudgetOptions = ['Moins de 5000 FCFA', '5 000 - 10 000 FCFA', '10 001 - 20 000 FCFA', 'Plus de 20 000 FCFA']
        const kindOfProductsOptions = ['Fruits', 'Légumes', 'Produits laitiers', 'Viande', 'Poisson', 'Produits bio', 'Produits locaux', 'Autre']
        const kindOfInterestOptions = ['Oui, très intéressé(e)', 'Oui, potentiellement intéressé(e)','Peut-être' , 'Non, pas intéressé(e)']
        const kindOfAvantagesOptions = ['Gain de temps', 'Facilité et commodité', 'Accès à des produits locaux/spécifiques', 'Possibilité de comparer les prix', 'Autres']
        const deliveryDurationOptions = ['30 minutes à 1 heure', '1 à 2 heures', 'Plus de 2 heures']
        const deliveryCostOptions = ['Moins de 500 FCFA', '500 - 1000 FCFA', '1001 - 2000 FCFA', 'Plus de 2000 FCFA', 'livraison gratuite sous certaines conditions (ex: montant minimum d\'achat)']
        const choiceValue = ref([]);

        function incrementStep() {
            step.value++;
        };
        function decrement() {
            step.value --;
        }

        return {
            step, professionOptions, selectedProfession, buyLocationOptions,
            buyFrequencyOptions, buyBudgetOptions, kindOfProductsOptions,
            kindOfInterestOptions, kindOfProductsOptions, kindOfAvantagesOptions,
            deliveryDurationOptions, deliveryCostOptions,
            selectedProfession, incrementStep, buyFrequencyOptions, decrement, choiceValue,
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

.about__btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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