<template>
    <div class="input__family">
      <label :for="label">{{ label }}</label>
      <select 
        :id="label"
        v-model="inputValue"
        @change="updateValue"
      >
        <option value="">Sélectionner</option>
        <option 
          v-for="(item, index) in options" 
          :key="index" 
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
</template>
  
<script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      label: {
        type: String,
        default: "Tranche d'âge"
      },
      options: {
        type: Array,
        default: () => ['0-18', '19-25', '26-35', '36-45', '46-55', '56+']
      },
      modelValue: {
        type: String,
        default: ''
      }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const inputValue = ref(props.modelValue);
  
      // Met à jour la valeur parente quand inputValue change
      const updateValue = () => {
        emit('update:modelValue', inputValue.value);
        console.log(inputValue.value);
      };
  
      // Synchronise inputValue si modelValue change depuis le parent
      watch(() => props.modelValue, (newVal) => {
        inputValue.value = newVal;
      });
  
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

  select{
    padding: 0.4rem 1rem; 
    background: #111111;
    border: 1px solid #f3f3f3;
    outline: #f3f3f3;
    color: #f3f3f3;
    width: 100%;
    border-radius: 0.2rem;
    font-family: 'Inter';
  }
    
  select:focus{
    outline: #007bff;
    border: 1px solid #007bff;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 768px) {

      
  }

</style>