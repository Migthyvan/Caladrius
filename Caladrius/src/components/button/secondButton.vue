<template>
    <button class="services__button">
       {{ label }}
        <i class="ri-contract-right-line"></i>
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
  padding: 0.8rem;
  border: 2px solid #007bff;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: #3f4e5e;
  color: #f3f3f3;
  width: 70%;
  cursor: pointer;
  /* Ajoutez la transition ici pour une meilleure pratique */
  transition: all 0.5s ease;
  display: flex;
  gap:0.5rem;
  align-items: center;
}

i{
    color: #f3f3f3;
}

.main__button:hover {
  background: #0e5311;
  border-color: #0e5311;
}
</style>