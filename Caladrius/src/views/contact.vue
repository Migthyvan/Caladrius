<template>

    <div class="contact">
        <navbar/>
        <r_contactSection/>
        <r_footerSection/>
    </div>

</template>
    
<script>
import navbar from '../components/layout/navbar.vue';
import r_footerSection from '../components/section/r_footerSection.vue';
import r_contactSection from '../components/section/r_contactSection.vue';

export default {
components:{
    navbar, r_contactSection, r_footerSection
}
}
</script>
    
<style scoped>
.contact{
    background: #111111;
}
</style>