<template>
    <div class="input__family">
        <label for="textarea-id">{{ label }}</label>
        <textarea 
            id="textarea-id"
            :placeholder="placeholder"
            v-model="textValue"
            :class="{ filled: textValue }"
            @focus="showToolbar = true"
            @blur="handleBlur"
        ></textarea>

        <div class="divider"></div>

        <div class="toolbar" v-if="showToolbar" @mousedown.prevent>
            <button type="button" @click="insertTag('bold')" title="Gras">
                <strong>B</strong>
            </button>
            <button type="button" @click="insertTag('italic')" title="Italique">
                <em>I</em>
            </button>
            <button type="button" @click="insertFile" title="Insérer un fichier">
                📎
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';

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
        
        const showToolbar = ref(false);
        
        const handleBlur = () => {
            // On laisse un petit délai pour permettre le clic sur les boutons
            setTimeout(() => {
                showToolbar.value = false;
            }, 200);
        };
        
        const insertTag = (type) => {
            const textarea = document.getElementById('textarea-id');
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textValue.value.substring(start, end);
            
            let wrappedText = '';
            switch(type) {
                case 'bold':
                    wrappedText = `**${selectedText}**`;
                    break;
                case 'italic':
                    wrappedText = `_${selectedText}_`;
                    break;
                default:
                    wrappedText = selectedText;
            }
            
            textValue.value = textValue.value.substring(0, start) + wrappedText + textValue.value.substring(end);
            
            // Restaurer le focus et la position du curseur
            setTimeout(() => {
                textarea.focus();
                textarea.setSelectionRange(start + 2, start + 2 + selectedText.length);
            }, 0);
        };
        
        const insertFile = () => {
            // Créer un input file caché
            const input = document.createElement('input');
            input.type = 'file';
            input.style.display = 'none';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const textarea = document.getElementById('textarea-id');
                    const start = textarea.selectionStart;
                    
                    // Ici vous pourriez uploader le fichier et obtenir une URL
                    // Pour l'exemple, on insère juste le nom du fichier
                    textValue.value = textValue.value.substring(0, start) + `[Fichier: ${file.name}]` + textValue.value.substring(start);
                    
                    // Restaurer le focus
                    setTimeout(() => {
                        textarea.focus();
                        textarea.setSelectionRange(start + 1, start + 1);
                    }, 0);
                }
            };
            
            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        };

        return { 
            textValue,
            showToolbar,
            handleBlur,
            insertTag,
            insertFile
        };
    }
}
</script>
  
<style scoped>
.input__family {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    position: relative;
}

label {
    color: #f3f3f3;
}

textarea {
    padding: 2rem;
    background: #16120F;
    border: 1px solid #f3f3f3;
    outline: #f3f3f3;
    color: #f3f3f3;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    min-height: 150px;
    resize: vertical;
}

textarea:focus {
    outline: #007bff;
    border: 1px solid #007bff;
    transition: all 0.3s ease-in-out;
}

.filled {
    outline: #007bff;
    border: 1px solid #007bff;
}

.toolbar {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    background: #16120F;
    border: 1px solid #f3f3f3;
    border-radius: 0.5rem;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: 10;
}

.toolbar button {
    background: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toolbar button:hover {
    background: #0056b3;
}
</style>