<template>
  <div class="main__container  center__flex__mobile">
    <p class="title">Newsletter</p>
    <h2 class="subtitle">Restons en contact avec la newsletter</h2>

    <div class="center__flex__mobile newsletter__container">
      <newsletterTools/>
    </div>
  </div>
</template>

<script>
import newsletterTools from '../tools/newsletterTools.vue';
export default {
  components:{
    newsletterTools
  }
}
</script>

<style scoped>

.main__container{
  padding-top: 6rem;
  background: #16120F;
}

.subtitle{
  font-size: 2rem;
  text-align: center;
}

.newsletter__container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
}
</style>