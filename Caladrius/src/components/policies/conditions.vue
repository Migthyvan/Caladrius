<template>
    <div class="">
        <navbar/>
        <policies/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import policies from './policies.vue';

export default{
    components:{
        navbar, r_footerSection, policies
    },

}
</script>

<style>
.subtitle{
    font-size: 2rem;
}
</style>