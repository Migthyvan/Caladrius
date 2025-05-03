<template>
  <div class="main__container  center__flex__mobile">
    <p class="tile">Newsletter</p>
    <h2 class="subtitle">Restons en contact avec la newsletter</h2>

    <div class="center__flex__mobile newsletter__container">
      <newsletterTools/>
    </div>
  </div>
</template>

<script>
import formTool from '../tools/formTool.vue';
import newsletterTools from '../tools/newsletterTools.vue';
export default {
  components:{
    formTool, newsletterTools
  }
}
</script>

<style scoped>

.main__container{
  padding-top: 6rem;
}

.subtitle{
  font-size: 2rem;
}

</style>