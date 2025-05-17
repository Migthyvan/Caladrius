<template>
    <div class="">
        <navbar/>
        <policies5/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import policies5 from './policies5.vue';

export default{
    components:{
        navbar, r_footerSection, policies5
    },

}
</script>

<style>
.subtitle{
    font-size: 2rem;
}
</style>