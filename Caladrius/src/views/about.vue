<template>
    <div class="about">
        <navbar/>
        <aboutUsOther/>
        <r_footerSection/>
    </div>
</template>
  
<script>
import navbar from '../components/layout/navbar.vue';
import footerSection from '../components/section/r_footerSection.vue';
import r_aboutUsSection from '../components/section/r_aboutUsSection.vue';
import r_footerSection from '../components/section/r_footerSection.vue';
import aboutUsOther from '@/components/section/aboutUsOther.vue';
export default {
components:{
    navbar, footerSection, r_aboutUsSection, r_footerSection, aboutUsOther
}
}
</script>
  
<style scoped>
    .about{
        background: #111111;
    }
</style>