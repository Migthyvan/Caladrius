<template>
  <div>
    <sidebar/>
    <topic-section/>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import navbar from '../layout/navbar.vue'
import sidebar from '../layout/sidebar.vue'
import TopicSection from './topicSection.vue'

export default {
    components:{
      navbar, sidebar, TopicSection
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