<template>
    <div class="main__container center__flex__mobile">
        <p class="title" data-aos="fade-up">A propos</p>
        <h2 class="subtitle" data-aos="fade-up">
            Qui sommes-nous?
        </h2>
        
        <div class="service__container ">
            
            <img src="../../assets/pictures/african__students__2.jpeg" data-aos="fade-right" alt="african students">

            <p data-aos="fade-left">
                {{ description }}
            </p>

        </div>

        <div class="center__flex__mobile aboutUs__container">
            <div class="card">
                <i class="fa-solid fa-book" data-aos="fade-up"></i>
                <div class="card__info">
                    <h4 data-aos="fade-up">Nos valeurs</h4>
                    <p data-aos="fade-up">
                        Chez caladrius, nous croyons en l'innovation, la créativité et l'engagement envers nos clients.
                    </p>
                    <span data-aos="fade-up" @click="router.push('/about')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
                </div>
            </div>
            <div class="card">
                <i class="fa-solid fa-pen" data-aos="fade-down"></i>
                <div class="card__info">
                    <h4 data-aos="fade-down">Nos principes</h4>
                    <p data-aos="fade-up">
                        Nous nous engageons à fournir des solutions de qualité, en respectant les délais et en dépassant les attentes de nos clients.
                    </p>
                    <span data-aos="fade-up" @click="router.push('/about')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
                </div>
            </div>
            <div class="card">
                <i class="fa-solid fa-bullseye" data-aos="fade-up"></i>
                <div class="card__info">
                    <h4 data-aos="fade-up">Nos objectifs</h4>
                    <p data-aos="fade-up">
                        Notre objectif est de transformer vos idées en réalité numérique,
                        en vous offrant des solutions sur mesure qui répondent à vos besoins spécifiques.
                    </p>
                    <span data-aos="fade-up" @click="router.push('/about')">En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    props: {
        title :{
            type: String,
            default: "A propos"
        },
        description :{
            type: String,
            default: "Nous concevons des sites web modernes, des applications mobiles intuitives et offrons des solutions freelance adaptées à vos besoins. Chez Caladrius, une équipe passionnée vous accompagne pour donner vie à vos projets avec un design soigné, des technologies performantes et une approche personnalisée."
        }
    },
    setup(){
        const router = useRouter()
        return{
            router
        }
    }
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

.card i{
    color: #f3f3f3;
}

.card span:hover{
    cursor: pointer;
    color: #2b92ff;
    transition: ease-in-out 0.5s;
}

span{
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
}

span i {
    color:#f3f3f3;
}


.subtitle{
    font-size: 2rem;
}

@media (min-width: 768px) {

    .aboutUs__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        padding: 1rem;
    }

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;      
        gap: 1rem;
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
        margin: 0 3rem;
    }

    .service__container{
        display: flex;
        align-items: center;
        justify-content: center;      
        gap: 4rem;
    }

    .service__container p{
        width: 40%;
    }

}
</style>