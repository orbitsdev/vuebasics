

<template>
    

<ul>
    <li v-for="product in products" :key="product.id">
        <slot :product="product" name="products"></slot>
    </li>

</ul>
</template>

<script>
    export default {
     props:['products']
    }
</script>

<style lang="scss" scoped>

</style>