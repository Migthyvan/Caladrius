<template>
    <div class="center__flex__mobile my__form">
        <div class="input__group ">
            <inputFamily label="Nom" placeholder="Entrer votre nom" type="text"></inputFamily>
            <inputFamily label="Prenoms" placeholder="Entrer votre prenom" type="text"></inputFamily>
        </div>
        <div class="about__email">
            <inputFamily label="Email" placeholder="votre email" type="mail"></inputFamily>
        </div>
        <div class="about__email">
            <textAreaTool label="Email" placeholder="Entrer votre email" type="email"></textAreaTool> 
        </div>
        <mainButton label="Envoyer" type="submit"></mainButton>
    </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
import inputFamily from './inputFamily.vue';
import textAreaTool from './textAreaTool.vue';
export default {
    components:{
        inputFamily, textAreaTool, mainButton
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
</style>