<template>


        <ul>

            <li v-for="student  in students" :key="student.id">
                <slot :student="student" :parent="student.id" > </slot>
            </li>

        </ul>

</template>

<script>
    export default {

    props: ['students'],
       
    }
</script>

<style scoped>

</style>