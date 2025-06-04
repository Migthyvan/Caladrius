<template>
    <div class="main__container center__flex__mobile">
        <div class="main__content center__flex__mobile ">
            <div class="title-line"></div>
            <h1 class="animated-title">
                Allions la technologie de l'avenir à la sagesse éternelle de nos terres.
            </h1>
            <h3 class="animated-subtitle">
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
import { onMounted } from 'vue';

export default {
    components:{
        mainButton
    },
    setup(){
        const router = useRouter();
        
        onMounted(() => {
            // Ajoute les classes pour déclencher les animations après le rendu
            setTimeout(() => {
                const title = document.querySelector('.animated-title');
                const subtitle = document.querySelector('.animated-subtitle');
                if (title) title.classList.add('animate');
                if (subtitle) subtitle.classList.add('animate');
            }, 100);
        });
        
        return {
            router
        }
    },
    
}
</script>

<style scoped>
.main__container{
    padding: 4rem 1rem 1rem 1rem;
    background-image: url('../../assets/pictures/antiquities-6973196_1920.jpg');
    background-size: cover;
    box-sizing: border-box;
    min-height: 100vh;
    overflow-y: hidden;
}

/* Animations */
.animated-title {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.animated-subtitle {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s;
}

.animated-title.animate,
.animated-subtitle.animate {
    opacity: 1;
    transform: translateY(0);
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