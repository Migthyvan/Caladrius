<template>
  <div class="card__services"
    data-aos="fade-up"
    data-aos-duration="3000"
  >
    <h4 class = "title">{{ title }}</h4>
    <h2 class="subtitle">
      €{{price}}
    </h2>
    <p>
      {{ paymentMethods }}
    </p>
    <mainButton label="commander"
      @click="handleClick"
    />

    <ul>
      <li v-for="(item, index) in features" :key="index">        
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import mainButton from '../button/mainButton.vue';
export default {
  props:{

    title:{
      type:String,
      default:'basic'
    },

    price:{
      type:String,
      default: '599'
    },
    paymentMethods:{
      type: String,
      default:'2 mois de maintenance gratuite'
    },
    features:{
      type: Array,
      default:[
        'Site vitrine (1-5 pages)',
        'Formulaire de contact basique.',
        'Hébergement inclus',
        '48-hour support response time'
      ]
    }

  },

  emits:['commande'],

  components:{
    mainButton
  },

  setup(props, {emit}) {
    
    const handleClick = () =>{
      emit('commande')
    }
    
    return {
      handleClick
    };
  }
}
</script>

<style scoped>
.card__services{
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  gap: 1rem;
}

.card__services h4{
  color: #47a0ff;
  font-weight: 600;
}

span{
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  color: #f3f3f3;
}

span i {
  color:#f3f3f3;
}

ul{
  color: #f3f3f3;
  line-height: 2.5;
  /*list-style-type: "✓ ";*/
  padding-left: 1rem;
  text-align: center;
}

.subtitle, title{
  text-align: center;
}

.subtitle{
  font-size: 2rem;
}
</style>