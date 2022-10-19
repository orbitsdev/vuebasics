<template>
  <section>
    <div :class="['block'  ,isAnimated ? 'animated'  :'']"></div>
    <button @click="animateBlock">Animate</button>
  </section>
</template>

<script>
export default {
        data() {
            return {
                isAnimated: false,
            }
        },
  methods: {
    animateBlock() {
        console.log('Animate Box');
        this.isAnimated = !this.isAnimated;
        console.log(this.isAnimated);
    },
  },
};
</script>

<style scoped>
section {
  margin: 20px auto;
  padding: 20px;
  position: relative;
  width: 100%;
  background: red;
}

.block {
  height: 100px;
  width: 100px;
  background: purple;
  transition: all 0.3s ease-in
}
.animated{
    transform: translate(100px);
}

</style>
