<template>
    <div class="container">
        <navbar></navbar>
        <r_firstSection></r_firstSection>
        <r_serviceSection></r_serviceSection>
        <r_aboutUsSection></r_aboutUsSection>
        <r_contactSection></r_contactSection>
        <r_footerSection></r_footerSection>
        <ourBrand></ourBrand>
    </div>
</template>

<script>
import r_firstSection from '@/components/section/r_firstSection.vue';
import navbar from '@/components/layout/navbar.vue';
import r_serviceSection from '@/components/section/r_serviceSection.vue';
import r_aboutUsSection from '@/components/section/r_aboutUsSection.vue';
import r_contactSection from '@/components/section/r_contactSection.vue';
import r_footerSection from '@/components/section/r_footerSection.vue';
import ourBrand from '@/components/layout/ourBrand.vue';

export default {
    components: {
        navbar, r_firstSection, r_serviceSection, r_aboutUsSection , r_aboutUsSection, 
        r_contactSection, r_footerSection, ourBrand
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: auto;
    background: #111111;
}
</style>