<template>
    <div class="container">
        <navbar></navbar>
        <r_firstSection></r_firstSection>
        <r_serviceSection></r_serviceSection>
        <r_aboutUsSection></r_aboutUsSection>
        <contactSection></contactSection>
        <footerSection></footerSection>
    </div>
</template>

<script>
import r_firstSection from '@/components/section/r_firstSection.vue';
import navbar from '@/components/layout/navbar.vue';
import mainSection from '@/components/section/serviceSection.vue';
import aboutUsSection from '@/components/section/aboutUsSection.vue';
import contactSection from '@/components/section/contactSection.vue';
import footerSection from '@/components/section/footerSection.vue';
import r_serviceSection from '@/components/section/r_serviceSection.vue';
import r_aboutUsSection from '@/components/section/r_aboutUsSection.vue';

export default {
    components: {
        navbar, r_firstSection, r_serviceSection, r_aboutUsSection , mainSection, aboutUsSection, contactSection, footerSection
    }
}
</script>

<style>

</style>