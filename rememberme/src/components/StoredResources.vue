<template>


  <ul>

      <ListCard v-for="(resource , index) in resources" :key="resource.id" :resource="resource" :item-index="index">
      </ListCard>
    
  </ul>
</template>

<script>
import ListCard from "./UI/ListCard.vue";
export default {
  components: {
    ListCard,
  },

  
  inject: [
    "resources",
   
],


};
</script>

<style scoped>


</style>
