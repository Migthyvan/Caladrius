<template>
  <div class="input__family">
    <label for="name">{{ label }}</label>
    <input :type=type :placeholder= placeholder>
  </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            default: "Votre nom"
        },
        type:{
            type:String,
            default: 'text'
        },
        placeholder:{
            type:String,
            default: 'Entrer votre nom'
        }
    }
}
</script>

<style scoped>
.input__family{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label{
    color: #f3f3f3;
}

input{
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
}
</style>