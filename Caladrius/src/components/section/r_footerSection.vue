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
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/about">A propos</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><router-link to="/newsletter">Newsletter</router-link></li> 
            </ul>
        </div>
  
        <div class="sub__container ">
          <h4 class="subtitle">Mentions légales</h4>
          <ul>
            <li><router-link to="/conditions">Conditions générales</router-link></li>
            <li><router-link to="/confidentialité">Politique de confidentialité</router-link></li>
            <li><router-link to="/valeurs_morales_et_éthique">Valeurs morales et éthiques</router-link></li>
            <li><router-link to="/mentions_de_copyright">Mentions de copyright</router-link></li>
            <li><router-link to="droits_auteurs">Droits d'auteurs</router-link></li>
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
    padding-top: 1rem ;
}

li{
    cursor: pointer;
}

ul li a{
    color: #111111;
}

.sub__container{
    display: flex;
    flex-direction: column;
    justify-content: normal;
    gap: 1rem;
}

@media (min-width: 580px) {

    .my__footer{
        display: flex;
    }

    .sub__container{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
}
}

@media (min-width: 980px) {

    .my__footer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    .sub__container{
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
}

</style>