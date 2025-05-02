<template>
<div class="services">
    <navbar/>
    <servicesOther/>
    <r_footerSection/>
</div>
</template>
  
<script>
import r_footerSection from '../components/section/r_footerSection.vue';
import navbar from '../components/layout/navbar.vue';
import servicesOther from '@/components/section/servicesOther.vue';
export default {
components:{
   navbar, r_footerSection, servicesOther
}
}
</script>

<style scoped>
.services{
    background: #111111;
}
</style>