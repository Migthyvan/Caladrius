<template>
  <div class="main__container center__flex__mobile">
    <p class="title">Etude de marché</p>
    <h2 class="subtitle" >Aidez-nous à nous améliorer</h2>

    <div class="center__flex__mobile study__section">
        <studyForm/>
    </div>
  </div>
</template>

<script>
import inputFamily from '../tools/inputFamily.vue';
import selectFamily from '../tools/selectFamily.vue';
import studyForm from '../tools/studyForm.vue';
export default {

  components:{
    inputFamily,
    selectFamily,
    studyForm
  }

}
</script>

<style>

.study__section{
  width: 100%;
}

.subtitle{
  font-size: 2rem;
}

</style>