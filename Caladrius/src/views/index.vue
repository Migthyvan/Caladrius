<template>
    <div class="container">
        <navbar></navbar>
        <r_firstSection></r_firstSection>
        <mainSection></mainSection>
        <aboutUsSection></aboutUsSection>
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

export default {
    components: {
        navbar, r_firstSection, mainSection, aboutUsSection, contactSection, footerSection
    }
}
</script>

<style>

</style>