<template>
    <div class="main__container  center__flex__mobile">
        
        <div class="center__flex__mobile policy">
            <h3>
                Page Copyright
            </h3>
            <p>
                © Copyright - Propriété intellectuelle
            </p>
        </div>

        <div class="center__flex__mobile policy">

            <h3>
                1. Titularité des droits
            </h3>

            <p>
                L'ensemble du contenu présent sur le site www.caladrius.com est protégé par les législations françaises et 
                internationales relatives à la propriété intellectuelle.
                Sauf mention contraire, tous les éléments présents sur ce site (textes, images, logos, vidéos, éléments graphiques, 
                code source, design, nom de domaine, etc.) 
                sont la propriété exclusive de Création de site et d'application, immatriculé sous le numéro SIRET [XXXXXXXXXXXXXX].
                Toute utilisation, reproduction, diffusion, commercialisation, modification de tout ou partie du site, 
                sans autorisation écrite préalable, est strictement interdite et peut donner lieu à des poursuites judiciaires.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                2. Droits d'auteur
            </h3>

            <p>
                Conformément aux articles L111-1 et suivants du Code de la propriété intellectuelle, 
                toute création présente sur ce site (charte graphique, code, rédaction, identité visuelle…) 
                constitue une œuvre protégée et est la propriété de son auteur.
                Aucune cession de droits de propriété intellectuelle n'est réalisée par le biais du présent site. 
                L'utilisateur bénéficie uniquement d'un droit d'usage privé et non exclusif du contenu du site.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                3. Crédits & éléments tiers
            </h3>

            <p>
                Certaines images, icônes ou polices utilisées sur ce site peuvent provenir de sources externes 
                et libres de droits (ex : Unsplash, Freepik, Google Fonts, etc.). 
                Dans ce cas, les droits sont attribués à leurs auteurs respectifs conformément aux licences d'utilisation.
                Toute réutilisation de ces contenus reste soumise à leurs propres conditions de licence, 
                que l'utilisateur est invité à consulter.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                4. Réutilisation de contenu
            </h3>

            <p> Toute copie, même partielle, du contenu de ce site (ex. : extrait d'article, capture d'écran, ligne de code) doit :</p>
            
            <ul>
                <li>être accompagnée de la source claire et visible (www.caladrius.com)</li>
                <li>et faire l'objet d'une demande préalable d'autorisation à l'adresse : caladrius@gmail.com</li>
            </ul>
            
            <p>Toute utilisation non autorisée constitue une contrefaçon (article L335-2 du CPI) 
                passible de 3 ans d'emprisonnement et 300 000 € d'amende.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                5. Protection du code source
            </h3>

            <p>
                Le code source des projets réalisés, affiché ou évoqué sur ce site (ex. : exemples, démonstrations techniques) 
                reste la propriété de [Ton nom ou nom commercial], sauf mention contraire explicite (licence open source).
                Aucun code ne peut être réutilisé sans autorisation écrite.
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                6. Signalement d'un abus
            </h3>

            <p>
                Si vous pensez qu'un élément publié sur ce site enfreint vos droits d'auteur ou tout autre droit,
                vous pouvez nous contacter à : caladrius@gmail.com
                Nous nous engageons à étudier votre demande et à prendre les mesures nécessaires dans les meilleurs délais.
                
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                7. Modifications
            </h3>

            <p>
                La présente page peut être modifiée à tout moment sans préavis afin de rester conforme à la législation en vigueur.
                Dernière mise à jour : [Date]
                
            </p>

        </div>

        <div class="center__flex__mobile policy">

            <h3>
                8. Droit applicable
            </h3>

            <p>
                Ce site est régi par le droit ivoirien.
                Toute réclamation ou litige sera soumis à la compétence exclusive des tribunaux français.
                
            </p>

        </div>
        <div>
            <p>© 2025 Caladrius - Tous droits réservés.</p>
        </div>

    </div>
</template>

<script>

export default{
    
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