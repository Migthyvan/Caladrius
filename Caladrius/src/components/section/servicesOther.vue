<template>
    <div class="main__container center__flex__mobile">
        <p class="title">Services</p>
        <h2 class="subtitle">
            Que proposons-nous?
        </h2>
        
        <div class="service__container">
            
            <img src="../../assets/pictures/Africain service.png" data-aos="fade-left" alt="african students">

            <p>
                {{ description }}
            </p>

        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000"
        >
            Services de freelance
        </h2>

        <div class="service__container ">
            
            <p data-aos="fade-up" data-aos-duration="3000">
                {{ description }}
            </p>

            <img src="../../assets/pictures/freelancer.jfif" data-aos="fade-right" alt="african students">

        </div>

        <h2 class="subtitle" data-aos="fade-up" data-aos-duration="3000">
            Conception de site web
        </h2>

        <div class="service__container ">

            <img src="../../assets/pictures/site_conception.jfif" data-aos="fade-left" alt="african students">

            <p data-aos="fade-right">
                {{ description }}
            </p>
        </div>

        <div class="about__website" >
            <p class="title" >Nos prix</p>
            <h2 class="subtitle" >Prix adaptés en fonction de vos besoins</h2>
            <h4 class="subsubtile">
                Choisissez la meilleure formule avec les meilleures qui
                vont susciter l'engagment de votre audience en créant une
                fidélisation de vos clients et l'augmentation de vos ventes.
            </h4>

            <div class="card__family">
            
                <servicesCard
                    title = 'formule basique'
                    price = 299
                />
                <servicesCard
                    title = 'formule Intermédiaire'
                    price = 599
                    :features = intermediaireFeatures
                    payment-methods="3 mois de maintenance"
                />
                <servicesCard
                    title = 'formule Professionelle'
                    price = 999
                    :features = proFeatures
                    payment-methods="Maintenance 6 mois + analytics mensuels."
                />

            </div>

            
        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000">
            Application mobile
        </h2>

        <div class="service__container ">

            <p>
                {{ description }}
            </p>

            <img src="../../assets/pictures/objectif.jpg" data-aos="fade-left" alt="african students">

        </div>

        <div class="about__website" >
            <p class="title" >Nos prix</p>
            <h2 class="subtitle" >Prix adaptés en fonction de vos besoins</h2>
            <h4 class="subsubtile">
                Choisissez la meilleure formule avec les meilleures qui
                vont susciter l'engagment de votre audience en créant une
                fidélisation de vos clients et l'augmentation de vos ventes.
            </h4>

            <div class="card__family">
                <servicesCard
                    title="application basique"
                    price= 499
                    :features="mobileAppFeatures"
                />
                <servicesCard
                    title="application intermédiaire"
                    price = 999
                    :features="mobileAppInter_Features"
                />
                <servicesCard
                    title="application pro"
                    price= 1499
                    :features="proFeatures"
                />
            </div>

            
        </div>
        <modalServicesTool
            ref="modal"
            title="Commander"
            @confirm="onConfirm"
        />
    </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
import servicesCard from '../layout/servicesCard.vue';
import modalServicesTool from '../tools/modalServicesTool.vue';
import instance from '@/_services/api';
import { ref } from 'vue';
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
    },
    components:{
        mainButton, servicesCard, modalServicesTool
    },
    setup(){
        const intermediaireFeatures = [
            'Site dynamique', 'SEO avancé','Hébergement inclus', 
            'Intégration API', 'Design semi-personnalisé'
        ]
        const proFeatures = [
            'Développement full-stack','SEO avancé','Hébergement inclus',
            'Design semi-personnalisé','Base de données sécurisée', 
            'Paiements multi-gateways', 'Tests automatisés'
        ]
        const mobileAppFeatures = [
            '3-5 écrans max', 'Authentification basique', 'API REST simple',
            '1 mois de correctifs mineurs'
        ]
        const mobileAppInter_Features = [
            '5-10 écrans', 'Paiements in-app', 'Synchronisation offline',
            'Analytics', 'Publication sur les stores'
        ]
        const mobileProFeature = [
            'Architecture modulaire', 'CI/CD automatisé', 'Sécurité renforcée',
            'Intégration WebSockets/API temps réel', 'Maintenance 6 mois + livraison des sources',

        ]

        const modal = ref(null); // Référence vers la modale

        const onConfirm = () => {
            console.log('Confirmé')
        };
        
        return {intermediaireFeatures, proFeatures, mobileAppFeatures, mobileAppInter_Features,
            mobileProFeature, onConfirm, modal,
        }
    }

}
</script>

<style scoped>
.main__container{
    padding-top: 6rem;
    background: #16120F;
}

.card__family{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
}

.card h4{
    font-size: 1.3rem;
    font-weight: 600;
    color: #47a0ff;
}

.card i{
    color: #f3f3f3;
}

.about__website p{
    color: #f3f3f3;
    line-height: 2;
    text-align: center;
}

.about__website h4, h2{
    color: #f3f3f3;
    line-height: 2;
    text-align: center;
    width: 100%;
}

.about__website{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    justify-content: center;
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

    .card__family{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
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

    .card__family{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

}
</style>