


<template>

<TheHeader/>

<router-view v-slot="slotProps">
  <transition name="route" mode="out-in">
    <component  :is="slotProps.Component"></component>
  </transition>

</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';  


  export default {
    computed: {
      didAutoLogout(){
        return this.$store.getters.didAutoLogout;
      }
    },
    created () {
      this.$store.dispatch('tryLogin');
    },
    watch:{
      didAutoLogout(currentValue, oldValue){
        if(currentValue && currentValue !== oldValue){
          this.$router.replace('/coaches');
        }
      }
    },
    components: {
    TheHeader
}
   
  }
</script>

<style  scoped>


.route-enter-from{
  opacity:0;
  transform: translateY(-30px);

}

.route-leave-to{
  opacity:0;
  transform: translateY(30px);
}

.route-enter-active{
transition:  all 0.3s ease-out;
}
.route-leave-active{
transition:  all 0.3s ease-in;
}

.route-enter-to{
opacity:1;
transform: translateY(0);
}

.route-leave-from{
  opacity:1;
  transform: translateY(0);

}


</style>