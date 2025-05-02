<template>
    <div class="main__container center__flex__mobile">
        <p class="title">Services</p>
        <h2 class="subtitle">
            Que proposons-nous?
        </h2>
        
        <div class="service__container">
            
            <img src="../../assets/pictures/african__students__2.jpeg" data-aos="fade-left" alt="african students">

            <p>
                {{ description }}
            </p>

        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000"
        >
            Services de freelance
        </h2>

        <div class="service__container ">
            
            <p data-aos="fade-up"
                data-aos-duration="3000"
            >
                {{ description }}
            </p>

            <img src="../../assets/pictures/holdman.jpeg" data-aos="fade-right" alt="african students">

        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000"
        >
            Conception de site web
        </h2>

        <div class="service__container ">

            <img src="../../assets/pictures/valeur.jpg" data-aos="fade-left" alt="african students">

            <p data-aos="fade-right">
                {{ description }}
            </p>
        </div>

        <div class="about__website" >
            <p class="title" >pricing</p>
            <h2 class="subtitle" >Pricing that grows with you</h2>
            <h4 class="subsubtile">Choose an affordable plan that's packed with 
                the best features for engaging your audience,
                creating customer loyalty, and driving sales.
            </h4>

            <div class="card__family">
                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>

                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>

                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>
            </div>

            
        </div>

        <h2 class="subtitle" data-aos="fade-up"
            data-aos-duration="3000">
            Application mobile
        </h2>

        <div class="service__container ">

            <p>
                {{ description }}
            </p>

            <img src="../../assets/pictures/objectif.jpg" data-aos="fade-left" alt="african students">

        </div>

        <div class="about__website" >
            <p class="title" >pricing</p>
            <h2 class="subtitle" >Pricing that grows with you</h2>
            <h4 class="subsubtile">Choose an affordable plan that's packed with 
                the best features for engaging your audience,
                creating customer loyalty, and driving sales.
            </h4>

            <div class="card__family">
                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>

                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>

                <div class="card__services" data-aos="fade-up"
                data-aos-duration="3000">
                    <h4>
                        basic
                    </h4>
                    <h2>
                        $19.99/mo
                    </h2>
                    <p>
                        $15 per month if paid annually
                    </p>
                    <mainButton text="Get started"/>

                    <ul>
                        <li>5 products</li>
                        <li>Up to 1,000 subscribers</li>
                        <li>Basic analytics</li>
                        <li>48-hour support response time</li>
                    </ul>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
export default {
    props: {
        title :{
            type: String,
            default: "A propos"
        },
        description :{
            type: String,
            default: "Nous concevons des sites web modernes, des applications mobiles intuitives et offrons des solutions freelance adaptées à vos besoins.Chez Caladrius, une équipe passionnée vous accompagne pour donner vie à vos projets avec un design soigné, des technologies performantes et une approche personnalisée."
        }
    },
    components:{
        mainButton
    },
}
</script>

<style scoped>
.main__container{
    padding-top: 6rem;
}

.card{
    display: flex;
    gap: 1rem;
}

.card h4{
    font-size: 1.3rem;
    font-weight: 600;
    color: #47a0ff;
}

.card i{
    color: #f3f3f3;
}

.about__website p{
    color: #f3f3f3;
    line-height: 2;
    text-align: center;
}

.about__website h4, h2{
    color: #f3f3f3;
    line-height: 2;
    text-align: center;
    width: 100%;
}

.about__website{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    justify-content: center;
}

.card__services{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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

ul{
    color: #f3f3f3;
    line-height: 2.5;
    list-style-type: "✓ ";
    padding-left: 1rem;
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

    .card__family{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
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

    .card__family{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

}
</style>