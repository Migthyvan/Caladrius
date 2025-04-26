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
  cursor: pointer;
  /* Ajoutez la transition ici pour une meilleure pratique */
  transition: all 0.5s ease;
}

.main__button:hover {
  background: #005fc4;
  border-color: #007bff;
}

@media (min-width: 768px) {
  .main__button{
    max-width: 300px;
  }
}
</style>