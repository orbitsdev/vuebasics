<template>
    
  <div>

    <BaseDialog :open="isShow" @close="showDialog"/>
    
    <div>
      <button @click="showDialog">SHow Dialog</button>
    </div>
    <div>
      
    </div>
    
    <AnimationView />
  </div>

</template>

<script>
import AnimationView from "@/views/AnimationView";
import BaseDialog from '@/views/BaseDialog';
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    AnimationView,
    BaseDialog
  },

  methods: {
    showDialog() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>


</style>
