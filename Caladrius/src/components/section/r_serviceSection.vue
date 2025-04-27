<template>
  <div class="main__container center__flex__mobile">
    <p class="title">Deploy Faster</p>
    <h2>
        Trouvez tout ce dont vous avez besoin
    </h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsam maiores rem sapiente voluptatum molestias. 
        Repellendus consectetur nemo voluptate iste explicabo sed laborum, 
        sapiente rerum et expedita? Sed ratione doloribus cumque.
    </p>
    <div class="center__flex__mobile service__container ">
        <div class="card">
            <i class="fa-solid fa-code"></i>
            <div class="card__info">
                <h4>Développement web</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsam maiores rem sapiente voluptatum molestias.
                </p>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <div class="card__info">
                <h4>Développement web</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsam maiores rem sapiente voluptatum molestias.
                </p>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #007bff;"></i> </span>
            </div>
        </div>

        <div class="card">
            <i class="fa-solid fa-laptop"></i>
            <div class="card__info">
                <h4>Développement web</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsam maiores rem sapiente voluptatum molestias.
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

@media (min-width: 768px) {

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}
</style>