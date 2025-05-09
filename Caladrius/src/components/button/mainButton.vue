<template>
  <button 
    class="main__button" 
    :disabled="loading" 
    @click="handleClick"
  >
    <span v-if="!loading">{{ label }}</span>
    <loaderTools v-else />
  </button>
</template>

<script>
import loaderTools from './loaderTools.vue';
import secondLoader from './secondLoader.vue';

export default {
  name: 'MainButton',
  props: {
    label: {
      type: String,
      default: "Découvrir"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    loaderTools, secondLoader
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (!props.loading) {
        emit('click');
      }
    };

    return {
      handleClick
    };
  }
};
</script>

<style scoped>
.main__button {
  padding: 0.9rem;
  border: 1px solid #007bff;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: #007bff;
  color: #f3f3f3;
  width: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__button:disabled {
  background: #005fc4;
  border-color: #005fc4;
  cursor: not-allowed;
}

.main__button:hover:enabled {
  background: #005fc4;
  border-color: #007bff;
}

@media (min-width: 768px) {
  .main__button {
    max-width: 300px;
  }
}
</style>