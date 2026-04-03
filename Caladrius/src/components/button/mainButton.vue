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
  padding: 0.5rem;
  border: 1px solid #222222;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--primary-color);
  color: var(--white-color);
  width: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__button:disabled {
  background: var(--primary-color);
  background: var(--primary-color);
  cursor: not-allowed;
}

.main__button:hover:enabled {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

@media (min-width: 768px) {
  .main__button {
    width: 250px;
  }
}
</style>