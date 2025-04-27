<template>

    <div class="">
        <navbar/>
        <section class="second__container">
        <div class="main__content">
            <div class="title-line"></div>
    
            <h2 class="section__title">Nous Contacter</h2>
    
            <div class="title-line-second"></div>
    
            <h3 class="section__subtitle">
            Coordonnées
            </h3>
    
            <div class="coordinates">
                <span class="coordinates__item">
                    <i class="ri-map-pin-2-line"></i>
                    <p>Abidjan, Côte d'Ivoire</p>
                </span>
                <span class="coordinates__item">
                    <i class="ri-mail-line"></i>
                    <a href="mailto:caladriusllc@gmail.com">caladriusllc@gmail.com</a>
                </span>
                <span class="coordinates__item">
                    <i class="ri-phone-line"></i>
                    <a href="tel:+225 0103926375">+225 0103926375</a>
                </span>
            </div>
    
            <h3 class="section__subtitle">
                Contacter par email
            </h3>
    
            <div class="email__box">
                <inputFamily/>
                <textArea/>
            </div>
    
            <mainButton label = "Envoyer"/>
    
        </div>
        </section>
        <footerSection/>
    </div>

</template>
    
<script>
import secondButton from '../components/button/secondButton.vue';
import mainButton from '../components/button/mainButton.vue';
import inputFamily from '../components/tools/inputFamily.vue';
import textArea from '../components/tools/textAreaTool.vue';
import navbar from '../components/layout/navbar.vue';
import footerSection from '../components/section/footerSection.vue';

export default {
components:{
    secondButton, inputFamily, textArea,mainButton, navbar, footerSection
}
}
</script>
    
<style scoped>
.main__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 5rem;
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

.coordinates{
display: flex;
flex-direction: column;
gap: 1rem;
}

.coordinates__item{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
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

.email__box{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>