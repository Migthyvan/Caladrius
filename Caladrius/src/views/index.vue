<template>
    <div class="container">
        <navbar></navbar>
        <firstSection></firstSection>
    </div>
</template>

<script>
import firstSection from '@/components/section/firstSection.vue';
import navbar from '@/components/section/layout/navbar.vue';
export default {
    components: {
        navbar, firstSection
    }
}
</script>

<style>

</style>