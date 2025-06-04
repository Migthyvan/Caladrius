<template>
    <div class="main__container center__flex__mobile">
        <p data-aos="fade-up" class="title">A propos</p>
        <h2 class="subtitle" data-aos="fade-up">
            Qui sommes-nous?
        </h2>
        
        <div class="service__container">
            
            <img src="../../assets/pictures/african__students__2.jpeg" data-aos="fade-left" alt="african students">

            <p data-aos="fade-right"
                data-aos-duration="3000">
                Nous sommes une entreprise passionnée de développement spécialisée dans la création de sites internet modernes 
                et d'applications mobiles intuitives. Notre équipe passionnée met son expertise à votre service pour concevoir des 
                site internet sur-mesure qui répondent à vos besoins spécifiques. Que vous soyez un particulier; une petite entreprise ou une grande organisation,
                nous avons les compétences nécessaires pour vous permettre de débuter votre transformation numérique en toute sérénité
                pour vous aider à atteindre vos objectifs et à vous démarquer de la concurrence.
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
               pour Caladrius, la technologie est un outil puissant qui peut transformer la vie des gens et améliorer le monde.
               Nous croyons en l'importance de l'innovation, de la créativité et de la collaboration pour créer des solutions 
               qui répondent aux besoins de nos clients et de la société dans son ensemble.
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

            <p data-aos="fade-right"
                data-aos-duration="3000">
                la caladrius s'engage à respecter les principes de la transparence, de l'intégrité et de la responsabilité dans toutes ses activités.
                Nous croyons que la confiance est essentielle pour établir des relations durables avec nos clients et partenaires.
                Nous nous engageons à fournir des services de haute qualité et à respecter les délais convenus. Nous croyons que la satisfaction de nos clients est la clé de notre succès.
                Nous nous engageons à être à l'écoute de nos clients et à comprendre leurs besoins pour leur offrir des solutions adaptées.
            </p>
        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000">
            Nos Objectifs
        </h2>

        <div class="service__container ">

            <p data-aos="fade-left"
                data-aos-duration="3000">
                les objectifs de Caladrius sont de fournir des solutions numériques innovantes et de haute qualité qui répondent aux besoins de ses clients.
                Nous visons à aider les entreprises à se développer et à prospérer dans un monde numérique en constante évolution.
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