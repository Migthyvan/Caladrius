<template>
    <div class="">
        <navbar/>
        <policies3/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import policies3 from './policies3.vue';

export default{
    components:{
        navbar, r_footerSection, policies3
    },

}
</script>

<style>
.subtitle{
    font-size: 2rem;
}
</style>