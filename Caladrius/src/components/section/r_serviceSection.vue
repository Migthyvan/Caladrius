<template>
  <div class="main__container center__flex__mobile">
    <p class="title" data-aos="fade-up">Nos services</p>
    <h2 class="subtitle" data-aos="fade-up">
        Trouvez tout ce dont vous avez besoin pour une présence effective en ligne
    </h2>
    <h3 style="font-size: 1.4rem; text-align: center; max-width: 600px;" data-aos="fade-up">
        Nous vous proposérons une panoplie de solution adapatées à vos besoins et surtout qui
        qui répondent aux normes de votre audience.
    </h3 >
    <div class="center__flex__mobile service__container ">
        <IconServiceCards/>
    </div>
  </div>
</template>

<script>
import IconServiceCards from '../cards/IconServiceCards.vue';
import { useRouter } from 'vue-router';
export default {
    components:{
        IconServiceCards
    },
    setup(){
        const router = useRouter()
        return {
            router
        }
    },

}
</script>

<style scoped>
.main__container{
    padding-top: 4rem;
    background-color: #f3f3f3;
    color: #222222;
}

.card{
    display: flex;
    justify-content: normal;
    align-items: start;
    gap: 1rem;
}

.card h4{
    font-size: 1.3rem;
    font-weight: 600;
    color: #47a0ff;
}


.card span{
    display: flex;
    align-items: normal;
    gap: 1rem;
}

.card span:hover{
    cursor: pointer;
    color: #2b92ff;
    transition: ease-in-out 0.5s;
}

.subtitle{
    font-size: 2rem;
}

@media (min-width: 768px) {

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
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

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }

    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}
</style>