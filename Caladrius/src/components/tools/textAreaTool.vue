<template>
    <div class="input__family">
        <label for="textarea-id">{{ label }}</label>
        <textarea 
            id="textarea-id"
            :placeholder="placeholder"
            v-model="textValue"
            :class="{ filled: textValue }"
        ></textarea>
    </div>
</template>

<script>
import { computed } from 'vue';  // Ajout de l'import manquant

export default {
    props: {
        label: {
            type: String,
            default: "Votre message"
        },
        placeholder: {
            type: String,
            default: 'Entrer votre message'
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const textValue = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        });

        return { textValue };
    }
}
</script>
  
<style scoped>
.input__family {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
}

label {
    color: #f3f3f3;
}

textarea {
    padding: 1rem;
    background: #16120F;
    border: 1px solid #f3f3f3;
    outline: #f3f3f3;
    color: #f3f3f3;
    border-radius: 0.5rem;
}

textarea:focus {
    outline: #007bff;
    border: 1px solid #007bff;
    transition: all 0.3s ease-in-out;
}

.filled{
    outline: #007bff;
    border: 1px solid #007bff;
}
</style>