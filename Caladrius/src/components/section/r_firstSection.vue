<template>
    <div class="main__container center__flex__mobile">
        <div class="main__content center__flex__mobile ">
            <div class="title-line"></div>
            <h1>
                Entrons ensemble dans un univers de transformation et
                d'innovation.
            </h1>
            <h3>
                Decouvrez notre panoplie de solutions digitales pour faire grandir votre business.
            </h3>
            <div class="about__btn">
                <mainButton label = "Commencer" @click = "router.push('/services')"></mainButton>
                <span @click="router.push('/services')">En savoir plus <i class="ri-contract-right-line" style="color: #2b92ff;" @click="router.push('/services')"></i> </span>
            </div>
        </div>
    </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
import { useRouter } from 'vue-router';
export default {
    components:{
        mainButton
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
    padding: 4rem 1rem 1rem 1rem;
    background: #111111;
    box-sizing: border-box; /* Inclut padding/border dans la largeur */
    min-height: 100vh;
    overflow-y: hidden ;
}

.coordinates__item{
    width: 100%;
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.coordinates__item i{
    font-weight: 400;
}

.about__btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.about__btn span, .about__btn span i{
    cursor: pointer;
    transition: ease-in-out 0.5s;   
}

.about__btn span:hover {
    cursor: pointer;
    color: #2b92ff;
    transition: ease-in-out 0.5s;
}

span {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #f3f3f3;
}

@media (min-width: 768px) {

    h1,h2{
        text-align: center;
    }
    
    .about__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
}
}

@media (min-width: 1024px) {
    .main__container{
    padding: 4rem 4rem 1rem 4rem;
    min-height: 100vh;
    }

    h2{
        font-size: 2rem;
    }

    p, a, i{
        font-size: 1.5rem;
    }
} 
</style>