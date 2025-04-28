<template>
  <div class="main__container center__flex__mobile">
    <p class="title">Nos services</p>
    <h2 class="subtitle">
        Trouvez tout ce dont vous avez besoin
    </h2>
    <p>
        
    </p>
    <div class="center__flex__mobile service__container ">
        <div class="card">
            <i class="fa-solid fa-code"></i>
            <div class="card__info">
                <h4>Sercice freelance</h4>
                <p>
                   nous offrons des services de freelance pour vous aider à réaliser vos projets.
                </p>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <div class="card__info">
                <h4>conception d'application mobile</h4>
                <p>
                    nous concevons des applications mobiles sur mesure pour répondre à vos besoins spécifiques.
                </p>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-laptop"></i>
            <div class="card__info">
                <h4>conception de site internet</h4>
                <p>
                    nous créons des sites internet modernes et personnalisés pour vous démarquer en ligne.
                </p>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    display: flex;
    gap: 1rem;
}

.card h4{
    font-size: 1.3rem;
    font-weight: 600;
    color: #47a0ff;
}

.subtitle{
    font-size: 2rem;
}

@media (min-width: 768px) {

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}

@media (min-width: 1024px) {

    .main__container{
        margin: 0 4rem;
    }

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }

    title, .subtitle{
        text-align: center;
    }

    .subtitle{
        font-size: 2rem;
    }
}
</style>