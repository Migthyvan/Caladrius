<template>
  <button class="main__button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props:{
    label:{
      type: String,
      default: "Decouvrir"
    }
  }
}
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
  max-width: 400px;
  cursor: pointer;
  /* Ajoutez la transition ici pour une meilleure pratique */
  transition: all 0.5s ease;
}

.main__button:hover {
  background: #0e5311;
  border-color: #0e5311;
}
</style>