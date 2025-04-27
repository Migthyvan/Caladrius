<template>
    <div class="input__family">
      <label for="name">{{ label }}</label>
      <textarea name="" id="" :placeholder=placeholder></textarea>
    </div>
  </template>
  
  <script>
  export default {
      props:{
        label:{
            type: String,
            default: "Votre message"
        },
        type:{
            type:String,
            default: 'text'
        },
        placeholder:{
            type:String,
            default: 'Entrer votre message'
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

    textarea{
        padding: 1rem;
        background: #111111;
        border: 1px solid #f3f3f3;
        outline: #f3f3f3;
        color: #f3f3f3;
        border-radius: 0.5rem;
    }

    textarea:focus{
        outline: #007bff;
        border: 1px solid #007bff;
        transition: all 0.3s ease-in-out;
    }
</style>