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
  padding: 1rem;
  border: 1px solid #007bff;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(to right, #4dabf7, #3b82f6);
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
  background: linear-gradient(to right, #4dabf7, #2354a1);
  border-color: #007bff;
  transition: all 0.5s ease;
}

@media (min-width: 768px) {
  .main__button {
    width: 250px;
  }
}
</style>