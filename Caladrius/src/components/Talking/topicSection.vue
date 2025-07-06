<template>
    <div class="submain__container">
        <h2 class="topics__title">
            Sujet:
            <span>Application de pour collecter des avis.</span>
        </h2>
        <div class="divider"></div>
        <p>
            Partagez vos expériences et découvrez les avis des 
            autres utilisateurs sur notre application de collecte 
            d'avis ! Que ce soit pour évaluer un produit, un service 
            ou une entreprise, votre opinion compte. Rejoignez la discussion, 
            donnez votre feedback et aidez-nous à améliorer l'outil pour mieux répondre à vos besoins. 
            📱✨ #AvisClients #Feedback #Collaboration
        </p>
        <commenTool/>
    </div>
</template>

<script>
import commenTool from '../tools/commenTool.vue';
export default {
    components:{
        commenTool
    },
    setup() {

    }
}
</script>

<style scoped>
.topics__title{
    font-weight: 600;
    color: #2b92ff;
}

.topics__title span{
    font-weight: 400;
    color: white;
}
</style>