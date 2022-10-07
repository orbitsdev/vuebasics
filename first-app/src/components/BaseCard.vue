




<template>
    <div >
Base Card

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BaseCard'
        
    } 
</script>

<style scoped>

div{
    border:1px;
    border-style: dotted;
    border-color: purple;
    background: #f2f2f2;
    padding: 20px;
}

</style>