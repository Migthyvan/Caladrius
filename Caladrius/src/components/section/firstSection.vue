<template>
    <section class="main__container">
        <div class="main__content">
            <div class="title-line"></div>
            <h2>Entrons ensemble dans un univers de transformation et
                d'innovation.
            </h2>
            <mainButton></mainButton>
            <div class="title-line-second"></div>
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
                    <a href="tel:+225 0140008192">+225 0140008192</a>
                </span>
            </div>
            
        </div>
        
    </section>
</template>

<script>
import mainButton from '@/components/button/mainButton.vue';
import { ref } from 'vue';
export default {
    components: {
        mainButton
    },
}
</script>

<style scoped>
.main__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem 1rem;
    gap: 1rem;
    background: #222222;
    background-size: cover; /* Couvre tout l'espace */
    background-repeat: no-repeat; /* Empêche la répétition */
}

.main__content{
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 3rem;
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
    padding: 1rem;
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

i{
  font-size: 1.3rem;
  color: #007bff;
}

a{
  text-decoration: none;
  color: #f3f3f3;
}
</style>