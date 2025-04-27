<template>
    <div class="main__container center__flex__mobile">
        <div class="main__content center__flex__mobile ">
            <div class="title-line"></div>
            <h1>
                Entrons ensemble dans un univers de transformation et
                d'innovation.
            </h1>
            <h2>
                Decouvrez notre panoplie de solutions pour faire grandir votre business.
            </h2>
            <div class="about__btn">
                <mainButton label = "Commencer"></mainButton>
                <span>En savoir plus <i class="ri-contract-right-line" style="color: #fff;"></i> </span>
            </div>
        </div>

        <div class="main__content center__flex__mobile">
            <div class="title-line-second "></div>
            <div class="center__flex__mobile">
                <span class="coordinates__item">
                    <i class="ri-map-pin-2-line"></i>
                    <p>Abidjan, Côte d'Ivoire</p>
                </span>
                <span class="coordinates__item">
                    <i class="ri-mail-line"></i>
                    <a href="mailto:caladriusllc@gmail.com">caladriusllc@gmail.com</a>
                </span>
                <span class="coordinates__item">
                    <i class="ri-phone-line"></i>
                    <a href="tel:+225 0140008192">+225 0140008192</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
export default {
    components:{
        mainButton
    }
}
</script>

<style>

.main__container{
    padding: 4rem 1rem 1rem 1rem;
    background: #111111;
}

.coordinates__item{
    width: 100%;
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.coordinates__item i{
    font-weight: 400;
}

.about__btn {
    display: flex;
    align-items: center;
    gap: 1rem;
}

span {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #f3f3f3;
}

@media (min-width: 768px) {

    h1,h2{
        text-align: center;
    }
    
    .about__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
}
}

@media (min-width: 1024px) {
    .main__container{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    padding: 10rem 4rem 1rem 4rem;
    height: 100vh;
    }

    h2{
        font-size: 3rem;
    }

    p, a, i{
        font-size: 1.5rem;
    }
} 
</style>