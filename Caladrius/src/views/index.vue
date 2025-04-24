<template>
    <div class="container">
        <navbar></navbar>
        <firstSection></firstSection>
        <mainSection></mainSection>
        <mainSection></mainSection>
    </div>
</template>

<script>
import firstSection from '@/components/section/firstSection.vue';
import navbar from '@/components/layout/navbar.vue';
import mainSection from '@/components/section/mainSection.vue';

export default {
    components: {
        navbar, firstSection, mainSection
    }
}
</script>

<style>

</style>