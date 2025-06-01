<template>
    <div class="main__container  center__flex__mobile">
        
        <div class="center__flex__mobile policy">
            <h3>
                Nos valeurs & notre éthique professionnelle
            </h3>
            <p>
                Chez Caladrius, nous ne faisons pas que créer des sites et des applications. 
                Nous construisons des relations de confiance, basées sur des valeurs humaines 
                fortes et une éthique professionnelle rigoureuse.
            </p>
        </div>

        <div class="center__flex__mobile policy">

            <h3>
                1. Intégrité
            </h3>

            <p>
                Nous agissons avec honnêteté et transparence à chaque étape du projet. 
                Pas de promesses irréalistes, pas de frais cachés, pas de surprise. 
                La confiance est au cœur de notre démarche.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                2. Engagement
            </h3>

            <p>
               Chaque projet est traité avec le plus grand soin, quel que soit le budget. 
               Nous nous engageons à fournir des prestations de qualité, dans les délais 
               et avec un accompagnement sérieux.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                3. Écoute & communication
            </h3>

            <p>
                Nous mettons l'humain au centre : écouter vos besoins, comprendre vos enjeux, expliquer clairement nos démarches. 
                Nous croyons qu'un bon site naît d'une bonne communication.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                4. Professionnalisme
            </h3>

            <p>
               Nous utilisons des technologies fiables, à jour, et des pratiques conformes aux standards du web. 
               Chaque livrable est testé, documenté, et livré avec rigueur. 
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                5. Respect de la vie privée
            </h3>

            <p>
                La confidentialité de vos données et de celles de vos utilisateurs est une priorité. 
                Nous intégrons dès le départ les bonnes pratiques RGPD et respectons vos choix.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                6. Éthique numérique
            </h3>

            <p>
                Nous veillons à concevoir des solutions accessibles, responsables et utiles, qui ne favorisent pas la manipulation, 
                le spam ou les pratiques trompeuses.
                
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                7. Satisfaction client
            </h3>

            <p>
                Votre satisfaction est notre priorité. 
                Nous restons disponibles même après livraison pour répondre à vos questions, corriger un détail ou vous conseiller.
            </p>

        </div>

    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';


export default{
    components:{
        navbar, r_footerSection
    },
    props:{
        title:{
            type:String,
        },
        paragraph:{
            type: String
        },
        conditions:{
            type:Array
        }
    },
    setup(){
        

        return {  }
    }

}
</script>

<style scoped>

.main__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 6rem 1rem 1rem 1rem;
}

ul{
  color: #f3f3f3;
  line-height: 2.5;
  list-style-type: "✓ ";
  padding-left: 1rem;
  text-align: left;
}

li{
    line-height: 1.5;
}

@media (min-width: 768px) {

    .policy{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
    }
    
    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}

@media (min-width: 1440px) {

    .policy{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10rem;
    }
    
    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}
</style>