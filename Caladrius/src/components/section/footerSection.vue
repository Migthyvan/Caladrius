<template>
  <footer>
    
    <div class="logo">
        <div class="title-line"></div>
        CALADRIUS
        <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>

    <div class="logo">
        <h4 class="subtitle">Mentions légales</h4>
        <ul>
            <li class="footer_li">Conditions générales</li>
            <li class="footer_li">Politique de confidentialité</li>
            <li class="footer_li">Valeurs morales et éthiques</li>
            <li class="footer_li">Droits d'auteurs</li>
        </ul>
    </div>

    <div class="logo">
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: 600;
}

.mentions p{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    color: #007bff;
    border-top: 1px solid #007bff;
}

.subtitle{
    font-size: 1.2rem;
    color: #007bff;
}

ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.9rem;
    font-weight: 400;
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
    footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

  .title-line-second{
    display: none;
  }
}
</style>