<template>
    <div class="">
        <navbar/>
        <policies4/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import policies4 from './policies4.vue';

export default{
    components:{
        navbar, r_footerSection, policies4
    },

}
</script>

<style>
.subtitle{
    font-size: 2rem;
}
</style>