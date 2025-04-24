<template>
    <div class="container">
        <navbar></navbar>
        <firstSection></firstSection>
        <mainSection></mainSection>
        <aboutUsSection></aboutUsSection>
        <contactSection></contactSection>
        <footerSection></footerSection>
    </div>
</template>

<script>
import firstSection from '@/components/section/firstSection.vue';
import navbar from '@/components/layout/navbar.vue';
import mainSection from '@/components/section/serviceSection.vue';
import aboutUsSection from '@/components/section/aboutUsSection.vue';
import contactSection from '@/components/section/contactSection.vue';
import footerSection from '@/components/section/footerSection.vue';

export default {
    components: {
        navbar, firstSection, mainSection, aboutUsSection, contactSection, footerSection
    }
}
</script>

<style>

</style>