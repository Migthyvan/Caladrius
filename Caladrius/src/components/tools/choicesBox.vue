<template>
    <div class="choices__box">
        <div 
            v-for="(item, index) in items" 
            :key="index"
            class="choices__box__item"
            :class="{ 'active': activeIndex === index }"
            @click="selectItem(item, index)"
        >
            <h4>{{ item.title }}</h4>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'ChoicesBox',
    props: {
        projectType: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue', 'selected'],
    setup(props, { emit }) {
        const activeIndex = ref(null);
        const items = ref([
            { title: 'Site web' },
            { title: 'Application mobile' },
            { title: 'Service Freelance' }
        ]);

        const selectItem = (item, index) => {
            activeIndex.value = index;
            emit('update:modelValue', item.title);
            emit('selected', item);
            console.log('Feature sélectionnée:', item);
        };

        return {
            activeIndex,
            items,
            selectItem
        };
    }
}
</script>

<style>
.choices__box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.choices__box__item {
    width: 100%;
    min-height: 120px;
    background-color: #16120F;
    border-radius: 16px;
    padding: 1.5rem;
    border: 2px solid rgba(43, 146, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.choices__box__item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(43, 146, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.choices__box__item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: rgba(43, 146, 255, 0.6);
}

.choices__box__item:hover::before {
    opacity: 1;
}

.choices__box__item h4 {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
}

.choices__box__item.active {
    background-color: rgba(43, 146, 255, 0.15);
    border-color: #2b92ff;
    box-shadow: 0 0 0 3px rgba(43, 146, 255, 0.3);
}

.choices__box__item.active h4 {
    color: #2b92ff;
    font-weight: 600;
}

.choices__box__item.active::after {
    content: '✓';
    position: absolute;
    top: 10px;
    right: 10px;
    color: #2b92ff;
    font-size: 1rem;
    font-weight: bold;
}

@media (max-width: 600px) {
    .choices__box {
        grid-template-columns: 1fr;
    }
    
    .choices__box__item {
        min-height: 80px;
        padding: 1rem;
    }
}
</style>