<template>
  <span class="loader"></span>
</template>

<script>

export default {
    name: 'loaderTools',
    components:{
        
    }
}
</script>

<style scoped>
/* From Uiverse.io by Shoh2008 */ 
.loader {
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  position: relative;
}

.loader:before , .loader:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: #FFF;
  transform: translate(-50% , -100%)  scale(0);
  animation: push_401 2s infinite linear;
}

.loader:after {
  animation-delay: 1s;
}

@keyframes push_401 {
  0% , 50% {
    transform: translate(-50% , 0%)  scale(1)
  }

  100% {
    transform: translate(-50%, -100%) scale(0)
  }
}
</style>