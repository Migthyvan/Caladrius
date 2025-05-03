<template>
<div class="main__container center__flex__mobile">
    <p class="title" data-aos="fade-right">Contact</p>
    <h2 class="subtitle" data-aos="fade-left">
        Nous contacter
    </h2>
    <p data-aos="fade-up"
        data-aos-duration="3000">
        N'hésitez surtout à nous contacter pour toute question ou demande de renseignement.
    </p>
    <div class=" contact__container ">

        <div class="center__flex__mobile">
            <span class="coordinates__item" data-aos="fade-right">
                <i class="ri-map-pin-2-line"></i>
                <p>Abidjan, Côte d'Ivoire</p>
            </span>
            <span class="coordinates__item" data-aos="fade-right">
                <i class="ri-mail-line"></i>
                <a href="mailto:caladriusllc@gmail.com">caladriusllc@gmail.com</a>
            </span>
            <span class="coordinates__item" data-aos="fade-right">
                <i class="ri-phone-line"></i>
                <a href="tel:+225 0140008192">+225 0140008192</a>
            </span>
            <span class="coordinates__item" data-aos="fade-right">
                <i class="ri-whatsapp-line"></i>
                <a href="https://wa.me/2250140008192">+225 0140008192</a>
            </span>
            <span class="coordinates__item" data-aos="fade-right">
                <i class="ri-telegram-2-line"></i>
                <a href="https://t.me/2250140008192"> +225 0140008192</a>
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
    padding: 6rem 1rem 1rem 1rem;
}
.card{
    display: flex;
    gap: 1rem;
}


.coordinates__item{
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
}

.subtitle{
    font-size: 2rem;
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
        display: flex;
        align-items: center;
        justify-content: space-around;
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