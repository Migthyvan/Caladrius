<template>
  <div class="">
    <navbar/>
    <studySection/>
    <footerSection/>
  </div>
</template>

<script>
import navbar from '../../components/layout/navbar.vue';
import footerSection from '../../components/section/r_footerSection.vue';
import studySection from '@/components/section/studySection.vue';
export default {
    components:{
        navbar, footerSection, studySection
    },
    setup() {

    }
}
</script>

<style>

</style>