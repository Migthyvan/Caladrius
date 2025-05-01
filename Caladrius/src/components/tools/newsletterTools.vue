<template>
    <div class="">
        <div class="center__flex__mobile my__form">
            <div class="input__group ">
                <inputFamily label="Nom" 
                    placeholder="Votre nom" type="text" 
                    v-model="form.firstname">
                </inputFamily>
                <inputFamily label="Prenoms" 
                    placeholder="Votre prenom" 
                    type="text"
                    v-model="form.lastname">
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
            <mainButton label="souscrire" type="submit" @click="submitForm"></mainButton>

        </div>
    </div>   
</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
import { ref } from 'vue';

export default {
    
    components:{
        inputFamily, textAreaTool, mainButton
    },

    setup(){
        const form = ref({
            firstname: '',
            lastname: '',
            email: '',
        });
        const aboutMessage = ref({
            errorMessages:'',
            successMessage:'',
        });
        const attempts = ref(0);

        const step = ref(1)
        const incrementStep = () => {
            step.value++;
        };

        const submitForm = () => {
            if (form.value.firstname === '' || form.value.lastname === '' || form.value.email === '') {
                aboutMessage.value.errorMessages = 'Veuillez remplir tous les champs.';
                console.log(aboutMessage.value);
                attempts.value++;
                return;
            } else {
                console.log('Form submitted:', form.value);
                attempts.value = 0;
            }
        };

        return {
            form, submitForm, aboutMessage, attempts, incrementStep, step,
        };
    }
}
</script>

<style>

.my__form{
    display: flex;
    flex-direction: column;
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