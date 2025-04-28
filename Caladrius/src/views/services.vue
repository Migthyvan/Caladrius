<template>
<div class="services">
    <navbar/>
    <r_serviceSection/>
    <footerSection/>
</div>
</template>
  
<script>
import footerSection from '../components/section/footerSection.vue';
import navbar from '../components/layout/navbar.vue';
import r_serviceSection from '../components/section/r_serviceSection.vue';
export default {
components:{
   navbar, footerSection, r_serviceSection
}
}
</script>

<style scoped>
.services{
    background: #111111;
}
</style>