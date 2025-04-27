<template>
<div class="main__container center__flex__mobile">
    <p class="title">Contact</p>
    <h2 class="subtitle">
        Nous contacter
    </h2>
    <p>
        N'hésitez surtout à nous contacter pour toute question ou demande de renseignement.
    </p>
    <div class="center__flex__mobile contact__container ">

        <div class="center__flex__mobile">
            <span class="coordinates__item">
                <i class="ri-map-pin-2-line"></i>
                <p>Abidjan, Côte d'Ivoire</p>
            </span>
            <span class="coordinates__item">
                <i class="ri-mail-line"></i>
                <a href="mailto:caladriusllc@gmail.com">caladriusllc@gmail.com</a>
            </span>
            <span class="coordinates__item">
                <i class="ri-phone-line"></i>
                <a href="tel:+225 0140008192">+225 0140008192</a>
            </span>
        </div>

        <div class="card">
            <formTool></formTool>
        </div>
        
    </div>
</div>
</template>

<script>
import formTool from '../tools/formTool.vue';
export default {
    components:{
        formTool,
    }
}
</script>

<style scoped>

.main__container{
    padding: 1rem;
}
.card{
    display: flex;
    gap: 1rem;
}

.coordinates__item{
    font-size: 1rem;
    font-weight: 500;
}

@media (min-width: 768px) {

    .contact__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        width: 100%;
    }

    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
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