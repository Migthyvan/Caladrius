<template>
    <div class="about">
        <navbar/>
        <r_aboutUsSection/>
        <r_footerSection/>
    </div>
</template>
  
<script>
import navbar from '@/components/layout/navbar.vue';
import footerSection from '@/components/section/footerSection.vue';
import r_aboutUsSection from '@/components/section/r_aboutUsSection.vue';
import r_footerSection from '@/components/section/r_footerSection.vue';
export default {
components:{
    navbar, footerSection, r_aboutUsSection, r_footerSection
}
}
</script>
  
<style scoped>
    .about{
        background: #111111;
    }
</style>