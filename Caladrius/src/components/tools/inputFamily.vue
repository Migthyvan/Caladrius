<template>
  <div class="input__family">
    <label for="name">{{ label }}</label>
    <input :type="type" 
        :placeholder="placeholder" 
        :value="inputValue" 
        @input="updateValue" 
        :class="{ filled: inputValue }"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
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
        },
        modelValue:{
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const inputValue = ref(props.modelValue);

        const updateValue = (event) => {
            inputValue.value = event.target.value;
            emit('update:modelValue', inputValue.value);
        };

        return {
            inputValue,
            updateValue
        };
    }
}
</script>

<style scoped>
    .input__family{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 600px;
    }

    label{
        color: #f3f3f3;
    }

    input{
        padding: 0.4rem 1rem;  
        background: #16120F;
        border: 1px solid #f3f3f3;
        outline: #f3f3f3;
        color: #f3f3f3;
        border-radius: 0.2rem;
        width: 100%;
    }
    
    input:focus{
        outline: #007bff;
        border: 1px solid #007bff;
        transition: all 0.3s ease-in-out;
    }

    .filled{
        outline: #007bff;
        border: 1px solid #007bff;
    }

</style>