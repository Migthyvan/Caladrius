<template>
  <div class="main__container center__flex__mobile">
    <p class="title" data-aos="fade-up">Nos services</p>
    <h2 class="subtitle" data-aos="fade-up">
        Trouvez tout ce dont vous avez besoin
    </h2>
    <div class="center__flex__mobile service__container ">
        <div class="card">
            <i class="fa-solid fa-code" data-aos="fade-up"></i>
            <div class="card__info">
                <h4 data-aos="fade-up">Service freelance</h4>
                <p data-aos="fade-up">
                    Nous sommes une équipe de développeurs et de designers passionnés, et
                   nous offrons des services de freelance pour vous aider à réaliser vos projets.
                </p>
                <span data-aos="fade-up" @click="router.push('/services')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;" ></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-mobile-screen-button" data-aos="fade-up"></i>
            <div class="card__info">
                <h4 data-aos="fade-up">conception d'application mobile</h4>
                <p data-aos="fade-up">
                    nous concevons des applications mobiles sur mesure 
                    pour répondre à vos besoins spécifiques en veuillant à
                    exécuter toute vos idées.
                </p>
                <span data-aos="fade-up" @click="router.push('/services')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-laptop" data-aos="fade-up"></i>
            <div class="card__info">
                <h4 data-aos="fade-up">conception de site internet</h4>
                <p data-aos="fade-up">
                    Grâce à notre expertise en développement web,
                    nous créons des sites internet modernes et personnalisés pour vous démarquer en ligne.
                </p>
                <span data-aos="fade-up" @click="router.push('/services')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
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
    padding-top: 6rem;
    background: #16120F;
}

.card{
    display: flex;
    gap: 1rem;
}

.card h4{
    font-size: 1.3rem;
    font-weight: 600;
    color: #47a0ff;
}


.card span{
    display: flex;
    align-items: center;
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