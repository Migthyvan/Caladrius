<template>
  <div>
    <sidebar/>
    
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import navbar from '../layout/navbar.vue'
import sidebar from '../layout/sidebar.vue'

export default {
    components:{
        navbar, sidebar
    },

    setup(){
        const isOpen = ref(false)
        const isMobile = ref(false)
    }
}
</script>

<style scoped>


/* Responsive */
@media (max-width: 768px) {
  
}
</style>