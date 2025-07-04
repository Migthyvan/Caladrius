<template>
    <div>
        <navbar/>
        <index-talking/>
        <r_footerSection/>
    </div>
</template>

<script>
import navbar from '../layout/navbar.vue';
import r_footerSection from '../section/r_footerSection.vue';
import IndexTalking from './openAccount.vue';

export default {
    components:{
        navbar, IndexTalking, r_footerSection,
    }
}
</script>

<style>
.newsletter{
    background: #16120F;
}
</style>