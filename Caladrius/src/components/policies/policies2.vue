<template>
    <div class="main__container  center__flex__mobile">
        
        <div class="center__flex__mobile policy">
            <h3>
                Politique de Confidentialité
            </h3>
            <p>
                Dans le cadre de son activité, le site www.caladrius.com collecte et traite certaines données personnelles de ses utilisateurs.
                Cette politique de confidentialité a pour but de vous informer sur les données que nous collectons, leur traitement, et vos droits.
            </p>
        </div>

        <div class="center__flex__mobile policy">

            <h3>
                1. Responsable du traitement
            </h3>

            <p>
                Le responsable du traitement est :
            </p>

            <ul>
                <li>[Ton prénom et nom / nom de ton entreprise]</li>
                <li>Adresse : [Ton adresse postale]</li>
                <li>Email : [Ton adresse e-mail professionnelle]</li>
                <li>Numéro SIRET : [Ton SIRET]</li>
            </ul>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                2. Données collectées
            </h3>

            <p>
               Nous pouvons collecter les données suivantes :
            </p>

            <ul>
                 <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Message ou informations transmises via le formulaire de contact</li>
                <li>Adresse IP (à des fins de statistiques et de sécurité)</li>
            </ul>
        </div>

        <div class="center__flex__mobile policy">

            <h3>
                3. Finalité de la collecte
            </h3>

            <p>
                Les données personnelles sont collectées uniquement pour :
            </p>
             <ul>
                 <li>Répondre à vos demandes via le formulaire de contact</li>
                <li>Établir un devis ou une proposition commerciale</li>
                <li>Gérer la relation client</li>
                <li>Produire des statistiques anonymes sur la fréquentation du site</li>
            </ul>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                4. Base légale du traitement
            </h3>

            <p>
                La collecte repose sur :
            </p>
              <ul>
                 <li>L'intérêt légitime (communication et prospection)</li>
                <li>Le consentement (formulaire de contact)</li>
                <li>L'exécution d'un contrat (en cas de commande)</li>
            </ul>
        </div>

        <div class="center__flex__mobile policy">

            <h3>
                5. Durée de conservation
            </h3>

            <p>
               Les données sont conservées :
            </p>
             <ul>
                 <li>Jusqu'à 3 ans à compter du dernier contact pour les prospects</li>
                <li>Jusqu'à 10 ans pour les clients (obligations comptables)</li>
            </ul>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                6. Destinataires
            </h3>

            <p>
                Les données collectées ne sont transmises à aucun tiers sauf :
            </p>
            <ul>
                 <li>obligation légale (autorités judiciaires, etc.)</li>
                <li>sous-traitants techniques (hébergeur, outils de messagerie)</li>
            </ul>
            <p>Tous les sous-traitants respectent également le RGPD.</p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                7. Sécurité
            </h3>

            <p>
               Nous mettons en œuvre toutes les mesures de sécurité raisonnables pour protéger vos données (protocole HTTPS, pare-feu, accès restreint, etc.).
                
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                8. Vos droits
            </h3>

            <p>
                Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
                 <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
                <li>Droit d'introduire une réclamation auprès de la CNIL</li>
            </ul>
            <p>Pour exercer ces droits, vous pouvez nous contacter à : Caladrius@gmail.com</p>

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