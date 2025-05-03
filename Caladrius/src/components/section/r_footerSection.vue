<template>
    <footer class="center__flex__mobile  my__footer">

        <div class="logo">
            <h3>
                CALADRIUS
            </h3>
        </div>
      
        <div class="sub__container ">
            <h4 class="subtitle">Liens utiles</h4>
            <ul>
              <li>Accueil</li>
              <li>A propos</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Newsletter</li>
            </ul>
        </div>
  
        <div class="sub__container ">
          <h4 class="subtitle">Mentions légales</h4>
          <ul>
            <li class="footer_li">Conditions générales</li>
            <li class="footer_li">Politique de confidentialité</li>
            <li class="footer_li">Valeurs morales et éthiques</li>
            <li class="footer_li">Droits d'auteurs</li>
          </ul>
        </div>
  
        <div class="sub__container ">
          <h4 class="subtitle">Réseaux sociaux</h4>
          <ul>
            <li class="footer_li"><i class="ri-facebook-circle-fill"></i></li>
            <li class="footer_li"><i class="ri-instagram-line"></i></li>
            <li class="footer_li"><i class="ri-twitter-x-line"></i></li>
          </ul>
        </div>
  
        <div class="mentions">
          <p>Tous droits réservés</p>
        </div>
      
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background: #f3f3f3;
    padding: 1rem;
}

.logo h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #007bff;
}

.subtitle{
    color: #007bff;
    text-align: start;
    font-size: 1.2rem;
}

ul {
    list-style: none;
    line-height: 2;
}

.sub__container{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
}

@media (min-width: 580px) {

    .my__footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}

@media (min-width: 980px) {

    .my__footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
}

</style>