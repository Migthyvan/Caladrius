<template>
    <section class="second__container">
            <div class="main__content">
              <div class="title-line"></div>
              
              <h2 class="section__title">Qui sommes nous?</h2>
  
              <div class="title-line-second"></div>
  
              <h3 class="section__subtitle">
                CALADRIUS
              </h3>
              
              <p>   
                Nous sommes une petite société fondée par trois potes de Master 2 économie. Notre but 
                est de proposer des services de qualités dans le domaine digitale dans un premier temps puis
                faire grandir notre palette de services jusqu'à la finance des marchés.
              </p>

              <secondButton/>

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
    .large__box{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .main__content{
        padding-top: 4rem;
    }

  
}

@media (min-width: 1024px) {

    .main__content{
        padding: 1rem 3rem 1rem 3rem;
    }

    .services__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }

} 
</style>