<template>
    <button> {{ text }}</button>
</template>

<script>
    export default {
        props: {
            text: {
                type:String,
            },
        },
    }
</script>

<style scoped>

    button {
        padding:16px;
      
        cursor: pointer;
        outline: navajowhite;
        border:none;
       }

      
       
</style>