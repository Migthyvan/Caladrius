<template>
    <div class="">
        <navbar/>
        <policies2/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import policies2 from './policies2.vue';

export default{
    components:{
        navbar, r_footerSection, policies2
    },

}
</script>

<style>
.subtitle{
    font-size: 2rem;
}
</style>