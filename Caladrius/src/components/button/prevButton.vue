<template>
<button class="main__button">
    <i class="ri-contract-left-line"></i>
    {{ label }}
</button>
</template>

<script>
export default {
name: 'startButton',
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
padding: 0.4rem 1rem;
border: 1px solid #007bff;
border-radius: 0.4rem;
font-size: 1rem;
font-weight: 600;
background: #111111;
color: #f3f3f3;
cursor: pointer;
/* Ajoutez la transition ici pour une meilleure pratique */
transition: all 0.5s ease;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
width: 50%;
}

.main__button i {
    color: #f3f3f3;
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