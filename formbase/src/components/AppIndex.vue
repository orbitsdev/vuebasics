



<template>
    <HeaderComponent/>
<br>
    <hr>
    <router-view></router-view>
</template>

<script>
import HeaderComponent from './header/HeaderComponent.vue';
    export default {
    components: { HeaderComponent }
}
</script>

<style  scoped>

</style>