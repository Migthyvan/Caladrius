<template>
    <button class="services__button">
       {{ label }}
    </button>
</template>

<script>
export default {

    props:{
        label:{
            type: String,
            default: 'En savoir plus'
        }
    }

}
</script>

<style scoped>
.services__button {
  padding: 0.5rem;
  border: 1px solid #007bff;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: #111111;
  color: #f3f3f3;
  width: 70%;
  cursor: pointer;
  /* Ajoutez la transition ici pour une meilleure pratique */
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  gap:0.5rem;
  align-items: center;
  max-width: 250px;
}

i{
    color: #f3f3f3;
}

.services__button:hover {
  background: #007bff;
  border-color: #007bff;
}
</style>