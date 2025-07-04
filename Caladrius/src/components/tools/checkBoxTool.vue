<template>
  <div class="input__family">
    <label for="">{{ question }}</label>
    <div v-for="(item, index) in processedOptions" :key="index" class="checkbox__item">
      <input 
        type="checkbox" 
        :name="getOptionValue(item)" 
        :id="'item-' + index" 
        :value="getOptionValue(item)"
        :checked="inputValue.includes(getOptionValue(item))"
        @change="updateValue"
        v-model="inputValue"
      >
      <label :for="'item-' + index">{{ getOptionLabel(item) }}</label>
    </div> 
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  props: {
    label: {
      type: String,
      default: "Tranche d'âge"
    },
    question: {
      type: String,
      default: "Quels types de produits vivriers achetez-vous le plus souvent ?"
    },
    options: {
      type: Array,
      default: () => ['0-18', '19-25', '26-35', '36-45', '46-55', '56+']
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = ref([...props.modelValue]);

    // Fonction pour obtenir le label d'une option (supporte les objets et strings)
    const getOptionLabel = (option) => {
      return typeof option === 'object' ? option.label : option;
    };

    // Fonction pour obtenir la valeur d'une option (supporte les objets et strings)
    const getOptionValue = (option) => {
      return typeof option === 'object' ? option.value : option;
    };

    // Options traitées pour être compatibles avec les deux formats
    const processedOptions = computed(() => {
      return props.options.map(option => {
        if (typeof option === 'object') {
          return option;
        }
        return {
          label: option,
          value: option
        };
      });
    });

    // Met à jour la valeur parente quand inputValue change
    const updateValue = () => {
      emit('update:modelValue', [...inputValue.value]);
    };

    // Synchronise inputValue si modelValue change depuis le parent
    watch(() => props.modelValue, (newVal) => {
      inputValue.value = [...newVal];
    });

    return {
      inputValue,
      updateValue,
      getOptionLabel,
      getOptionValue,
      processedOptions
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
  max-width: 500px;
  padding: 0.4rem 1rem;  
}

.checkbox__item{
  width: 100%;
}

label{
  color: #f3f3f3;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #111111;
  border-radius: 0.5rem;
  border: 1px solid #f3f3f3;
  outline: none;
}
input[type="checkbox"]:checked {
  background-color: #007bff;
  border: 1px solid #007bff;
  transition: all 0.3s ease-in-out;
}

select {
  padding: 1rem;
  background: #111111;
  border: 1px solid #f3f3f3;
  outline: #f3f3f3;
  color: #f3f3f3;
  border-radius: 0.5rem;
  width: 100%;
}

select:focus {
  outline: #007bff;
  border: 1px solid #007bff;
  transition: all 0.3s ease-in-out;
}

@media (min-width: 768px) {

    
}

</style>