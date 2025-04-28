<template>
    <div class="main__container center__flex__mobile">
        <p class="title">A propos</p>
        <h2 class="subtitle">
            Qui sommes-nous?
        </h2>
        
        <div class="service__container ">
            
            <img src="../../assets/pictures/african__students__2.jpeg" alt="african students">

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ipsam maiores rem sapiente voluptatum molestias. 
                Repellendus consectetur nemo voluptate iste explicabo sed laborum, 
                sapiente rerum et expedita? Sed ratione doloribus cumque.
            </p>

        </div>

        <div class="center__flex__mobile aboutUs__container">
            <div class="card">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <div class="card__info">
                    <h4>Nos valeurs et principes</h4>
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
                    <h4>Nos valeurs et principes</h4>
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
                    <h4>Nos valeurs et principes</h4>
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

.card i{
    color: #f3f3f3;
}

span{
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
}

span i {
    color:#f3f3f3;
}


.subtitle{
    font-size: 2rem;
}

@media (min-width: 768px) {

    .aboutUs__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        padding: 1rem;
    }

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;      
        gap: 1rem;
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
        margin: 0 3rem;
    }

    .service__container{
        display: flex;
        align-items: center;
        justify-content: center;      
        gap: 4rem;
    }

    .service__container p{
        width: 40%;
    }

}
</style>