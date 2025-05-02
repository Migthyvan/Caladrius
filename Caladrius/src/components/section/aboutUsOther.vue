<template>
    <div class="main__container center__flex__mobile">
        <p class="title">A propos</p>
        <h2 class="subtitle">
            Qui sommes-nous?
        </h2>
        
        <div class="service__container">
            
            <img src="../../assets/pictures/african__students__2.jpeg" data-aos="fade-left" alt="african students">

            <p>
                {{ description }}
            </p>

        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000"
        >
            Nos valeurs
        </h2>

        <div class="service__container ">
            
            <p data-aos="fade-up"
                data-aos-duration="3000"
            >
                {{ description }}
            </p>

            <img src="../../assets/pictures/holdman.jpeg" data-aos="fade-right" alt="african students">

        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000"
        >
            Nos principes
        </h2>

        <div class="service__container ">

            <img src="../../assets/pictures/valeur.jpg" data-aos="fade-left" alt="african students">

            <p data-aos="fade-right">
                {{ description }}
            </p>
        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000">
            Nos Objectifs
        </h2>

        <div class="service__container ">

            <p>
                {{ description }}
            </p>

            <img src="../../assets/pictures/objectif.jpg" data-aos="fade-left" alt="african students">

        </div>
    </div>
</template>

<script>
export default {
    props: {
        title :{
            type: String,
            default: "A propos"
        },
        description :{
            type: String,
            default: "Nous concevons des sites web modernes, des applications mobiles intuitives et offrons des solutions freelance adaptées à vos besoins.Chez Caladrius, une équipe passionnée vous accompagne pour donner vie à vos projets avec un design soigné, des technologies performantes et une approche personnalisée."
        }
    }
}
</script>

<style scoped>
.main__container{
    padding-top: 6rem;
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