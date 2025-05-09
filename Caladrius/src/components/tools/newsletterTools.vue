<template>

    <div class="center__flex__mobile my__form">
        <div class="about__email ">
            <inputFamily label="Prenoms" 
                placeholder="Votre prenom" 
                type="text"
                v-model="form.name">
            </inputFamily>
        </div>
        <div class="about__email">
            <inputFamily label="Email" 
                placeholder="votre email" 
                type="email"
                v-model="form.email"
            ></inputFamily>
        </div>
        <transition>
            <p v-if = 'attempts > 0' class="error__message">
                {{aboutMessage.errorMessages}}
            </p>
        </transition>
        <transition>
            <p v-if = 'step === 2'>
                {{aboutMessage.successMessage}}
            </p>
        </transition>
        <mainButton 
            label="souscrire" type="submit" 
            @click="submitForm"
            :loading="isLoading"
        ></mainButton>

    </div>

</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
import instance from '@/_services/api';
import { ref } from 'vue';

export default {
    
    components:{
        inputFamily, textAreaTool, mainButton
    },

    setup(){
        const isLoading = ref(false);
        
        const form = ref({
            name: '',
            email: '',
        });
        
        const aboutMessage = ref({
            errorMessages:'',
            successMessage:'',
        });
        
        const attempts = ref(0);

        const step = ref(1)
        
        const submitForm = async () => {
            isLoading.value = true;
            if (!form.value.email || !form.value.name) {
                aboutMessage.value.errorMessages = 'Veuillez remplir tous les champs';
                attempts.value++;
                isLoading.value = false;
                return;
            }
            try {
                const response = await instance.post('/newsletter/subscribers/', form.value);
                aboutMessage.value.successMessage = 'Inscription réussie !';
                step.value = 2;
                attempts.value = 0; // Réinitialiser le nombre de tentatives
                aboutMessage.value.errorMessages = ''; // Effacer l'erreur précédente
            } catch (error) {
                aboutMessage.value.errorMessages = 'Une erreur est survenue lors de l\'envoi du formulaire';
                attempts.value++;
            } finally {
                isLoading.value = false;
            }
        };

        return {
            isLoading, form, submitForm, aboutMessage, attempts, step,
        };
    }
}
</script>

<style scoped>

.my__form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.input__group{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.about__email{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error__message{
    color: #ff2323;
    font-size: 1rem;
    text-align: center;
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