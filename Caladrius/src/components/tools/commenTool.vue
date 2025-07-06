<template>
  <div class="comment__section">
    <textAreaTool
        label="Votre commentaire"
        placeholder="Laissez votre commentaire"
    />
  </div>
</template>

<script>
import textAreaTool from './textAreaTool.vue';
export default {
    components:{
        textAreaTool
    }
}
</script>

<style>
.comment__section{
    width: 100%;
    background: #111111;
    padding: 1rem;
}
</style>