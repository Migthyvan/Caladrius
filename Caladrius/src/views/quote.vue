<template>
    <div >
        <navbar/>
        <quoteSection/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../components/layout/navbar.vue';
import r_footerSection from '../components/section/r_footerSection.vue';
import quoteSection from '../components/section/quoteSection.vue';
export default {
    components:{
        navbar, quoteSection, r_footerSection
    }
}
</script>

<style>
.newsletter{
    background: #16120F;
}
</style>