<template>
    <div class="choices__box">
        <div 
            v-for="(item, index) in items" 
            :key="index"
            class="choices__box__item"
            :class="{ 'active': activeIndex === index }"
            @click="setActive(index), voirFeatures(item)"
        >
            <h4>{{ item.title }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChoicesBox',
    emits: ['selected'],
    data() {
        return {
            activeIndex: null, // Aucun élément sélectionné au départ
            items: [
                { title: 'Site web' },
                { title: 'Application mobile' },
                { title: 'Service Freelance' }
            ]
        }
    },
    methods: {
        setActive(index) {
            this.activeIndex = index; // Met à jour l'index actif
        },
        getActiveItem() {
            return this.items[this.activeIndex];
        },
        voirFeatures() {
            console.log(this.getActiveItem());
        }
    }
}
</script>

<style>
.choices__box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.choices__box__item {
    width: 100%;
    height: 100%;
    background-color: #16120F;
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid #2b92ff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.choices__box__item h4 {
    color: #fff;
}

.choices__box__item.active {
    background-color: #2b92ff; /* Couleur lorsque actif */
    /* Vous pouvez aussi changer la couleur du texte si nécessaire */
}
</style>