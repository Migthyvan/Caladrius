<template>
    <div class="about">
        <navbar/>
        <r_aboutUsSection 
            description="Bienvenue chez Caladrius, une entreprise dynamique et
                innovante fondée par une équipe de passionnés du numérique. 
                Spécialisés dans la conception de sites web, le développement 
                d'applications mobiles et les services freelance, nous mettons 
                notre expertise et notre créativité au service de votre réussite.
                Chez Caladrius, nous croyons en des solutions sur mesure, 
                adaptées aux besoins uniques de chaque client. 
                Que vous soyez une start-up, une PME ou un entrepreneur 
                indépendant, notre mission est de vous offrir 
                des produits performants, esthétiques et intuitifs, 
                tout en garantissant une expérience utilisateur exceptionnelle."
            />
        <r_footerSection/>
    </div>
</template>
  
<script>
import navbar from '../components/layout/navbar.vue';
import footerSection from '../components/section/r_footerSection.vue';
import r_aboutUsSection from '../components/section/r_aboutUsSection.vue';
import r_footerSection from '../components/section/r_footerSection.vue';
export default {
components:{
    navbar, footerSection, r_aboutUsSection, r_footerSection
}
}
</script>
  
<style scoped>
    .about{
        background: #111111;
    }
</style>