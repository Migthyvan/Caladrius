<template>
    <section class="second__container">
        <div class="main__content">
            <div class="title-line"></div>
            
            <h2 class="section__title">Nos services</h2>

            <div class="title-line-second"></div>

            <h3 class="section__subtitle">
                Services digitaux
            </h3>

            <div class="services__container">
                
                <div class="services__card">
                    <span><i class="fa-solid fa-code"></i></span>
                    <h4 class="services__card__title">
                        Conception de sites internet
                    </h4>
                    <p> Nous vous aidons à naviguer dans le monde complexe
                        de la finance des marchés, en vous fournissant des 
                        conseils et des solutions sur mesure.
                    </p>
                    <secondButton
                        label = "je créé mon site"
                    />

                </div>

                <div class="services__card">
                    <span><i class="fa-solid fa-mobile-screen-button"></i></span>
                    <h4 class="services__card__title">
                        Conception d'application mobile
                    </h4>
                    <p> Nous vous aidons à naviguer dans le monde complexe 
                        de la finance des marchés, en vous fournissant 
                        des conseils et des solutions sur mesure.
                    </p>
                    <secondButton
                        label = "je créé mon app"
                    />
                </div>

                <div class="services__card">
                    <span><i class="fa-solid fa-laptop"></i></span>
                    <h4 class="services__card__title">
                        Services freelances
                    </h4>
                    <p>Nous vous aidons à naviguer dans le monde complexe de la finance des marchés, en vous fournissant des conseils et des solutions sur mesure.</p>
                    <secondButton
                        label="Mon freelance"
                    />
                </div>
            </div>

            <p>Découvrir tous nos services<i class="ri-contract-right-line"></i></p>
        </div>
    </section>
</template>

<script>
import secondButton from '../button/secondButton.vue';
export default {
components:{
    secondButton
}
}
</script>

<style scoped>
.main__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.second__container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
}

.section__subtitle{
    font-weight: 700;
    color: #469fff;
}

.services__container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.services__card{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /*border: 1px solid #007bff;*/
    border-radius: 1rem;
    background: #3f4e5e;
    padding: 1rem;
}

.services__card span{
    padding: 1rem;
    border: 1px solid #007bff;
    width: 18%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #007bff;
}

.services__card i{
    color: #f3f3f3;
}

.services__card .services__card__title{
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue;
}

.title-line {
    width: 120px; /* Longueur de la ligne */
    height: 4px; /* Épaisseur de la ligne */
    background-color: #007bff; /* Couleur de la ligne */
    margin-bottom: 1rem; /* Espace entre la ligne et le titre */
    border-radius: 2px; /* Bords légèrement arrondis */
}

.title-line-second{
    width: 95%; /* Longueur de la ligne */
    height: 2px; /* Épaisseur de la ligne */
    background-color: #007bff; /* Couleur de la ligne */
    margin-bottom: 1rem; /* Espace entre la ligne et le titre */
    border-radius: 2px; /* Bords légèrement arrondis */
}

@media (min-width: 768px) {
    .services__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    

  .title-line-second{
    display: none;
  }
}

@media (min-width: 1024px) {

  
} 
</style>