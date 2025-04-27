<template>
    <div class="main__container center__flex__mobile">
        <p class="title">A propos</p>
        <h2>
            Qui sommes-nous?
        </h2>
        
        <div class="center__flex__mobile service__container ">
            <div class="pictures">
                <img src="../../assets/pictures/african__students__2.jpeg" alt="african students">
            </div>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ipsam maiores rem sapiente voluptatum molestias. 
                Repellendus consectetur nemo voluptate iste explicabo sed laborum, 
                sapiente rerum et expedita? Sed ratione doloribus cumque.
            </p>

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

span i {
    color:#f3f3f3
}

@media (min-width: 768px) {

    .service__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}
</style>