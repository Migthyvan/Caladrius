<template>

    <div class="center__flex__mobile my__form" >

        <transition name="fade" mode="out-in">
            <div v-if="step===2"  class="succes">
                <p class="subtitle">{{ successMessage }}</p>
            </div>
        </transition>
        
        <div class="input__group">
            <inputFamily 
                label="Nom" 
                placeholder="Entrer votre nom" 
                type="text"
                v-model="firstname"
            ></inputFamily>
            <inputFamily 
                label="Prenoms" 
                placeholder="Entrer votre prenom" 
                type="text"
                v-model="lastname"
            ></inputFamily>
        </div>
        <div class="about__email">
            <inputFamily 
                label="Email" 
                placeholder="votre email" 
                type="mail"
                v-model="email"
            ></inputFamily>
        </div>
        <div class="about__email">
            <textAreaTool 
                label="Message" 
                placeholder="Entrer votre message" 
                v-model="message"
            ></textAreaTool> 
        </div>
        <transition>
            <ul v-if="attempts > 0 && errorMessages.length" class="error__message">
                <li v-for="(error, index) in errorMessages" :key="index">{{ error }}</li>
            </ul>
        </transition>
        <mainButton 
            label="envoyer" 
            type="submit" 
            @click="submitForm"
            :loading="isLoading"
        ></mainButton>
    </div>

</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
import { ref, computed } from 'vue';
import instance from '../../_services/api';

export default {
    components: {
        inputFamily, textAreaTool, mainButton
    },

    setup() {

        // About stepper
        const isLoading = ref(false);
        const step = ref(2);

        const firstname = ref('');
        const lastname = ref('');
        const email = ref('');
        const message = ref('');

        const errorMessages = ref([]);
        const successMessage = ref('');
        const attempts = ref(0);

        const form = computed(() => ({
            name: `${lastname.value} ${firstname.value}`.trim(),
            email: email.value,
            message: message.value
        }));

        const submitForm = async () => {
            isLoading.value = true;
            errorMessages.value = [];
            if (!firstname.value || !lastname.value || !email.value || !message.value) {
                if (!firstname.value) errorMessages.value.push("Le nom est obligatoire.");
                if (!lastname.value) errorMessages.value.push("Le prénom est obligatoire.");
                if (!email.value) errorMessages.value.push("L'email est obligatoire.");
                if (!message.value) errorMessages.value.push("Le message est obligatoire.");
                attempts.value++;
                isLoading.value = false;
                return null;
            }

            try {
                isLoading.value = true;
                const response = await instance.post('contact/', form.value);

                errorMessages.value = [];
                successMessage.value = "Formulaire envoyé avec succès";
                form.value = {};
                firstname.value = '';
                lastname.value = '';
                email.value = '';
                message.value = '';
                isLoading.value = false
                step.value = 2;

                return response.data;
            } catch (error) {
                const serverError = error.response?.data?.message || "Erreur serveur";
                errorMessages.value.push(`Échec de l'envoi : ${serverError}`);
                isLoading.value = false;
                throw error;
            }
        };

        return {
            step, isLoading,
            firstname, lastname, email, message,
            errorMessages, successMessage, attempts, form, submitForm
        };
    }
};
</script>

<style scoped>
.my__form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.succes{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.title, .subtitle{
    text-align: center;
    width: 100%;
}

.title{
    font-size: 2rem;
    font-weight: 600;
    color: #f3f3f3;
}

.subtitle{
    font-size: 2rem;
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