<template>
<div class="services">
    <navbar/>
    <r_serviceSection/>
    <r_footerSection/>
</div>
</template>
  
<script>
import r_footerSection from '../components/section/r_footerSection.vue';
import navbar from '../components/layout/navbar.vue';
import r_serviceSection from '../components/section/r_serviceSection.vue';
export default {
components:{
   navbar, r_footerSection, r_serviceSection
}
}
</script>

<style scoped>
.services{
    background: #111111;
}
</style>