<template>
    <div class="newsletter">
        <navbar/>
        <r_newsletterSection/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../components/layout/navbar.vue';
import r_footerSection from '../components/section/r_footerSection.vue';
import r_newsletterSection from '../components/section/r_newsletter.vue';
export default {
    components:{
        navbar, r_newsletterSection, r_footerSection
    }
}
</script>

<style>
.newsletter{
    background: #111111;
}
</style>