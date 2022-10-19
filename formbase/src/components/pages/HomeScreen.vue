<template>

    <div>
        <h3>From Module Product</h3>
        <li v-for="product in products" :key="product.id">
            {{ product.name }}
        </li>
    </div>
    <div>
        <h3>From Module Product</h3>
        <li v-for="course in courses" :key="course.id">
            {{ course.title }}
        </li>
        
        
    </div>
    <div>
        <h3>Dire From Module</h3>
        <!-- <li v-for="this.$store.courses.courses in courses" :key="course.id">
            {{ course.title }}
        </li> -->
        <li v-for="letter in this.$store.state.courses.a.alphabet" :key="letter">
            {{ letter }}
        </li>
        
    </div>
    <div>
        {{ finalCount }}
        Home Screen
    </div>

    <div>
        <p >{{ fullNameValue }}</p>
        <input type="text" v-model="fullname">
        <br>
        <button @click="$store.dispatch('changeName', {value: fullname})"> Change text</button>
    </div>
    <div>

        <button @click="showProductMutation" >Console Log Sub Moudel</button>
        <button @click="$store.commit('addOne')"> Add One From Muation</button>
        <button @click="$store.dispatch('addOne')"> Add Form Dispatch </button>
        <button @click="addOne"> Add </button>
    </div>
</template>




<script>
import {mapGetters} from 'vuex';
export default {    
    data() {
        return {
            fullname: '',
            products: this.$store.state.products.products,
            courses: this.$store.state.courses.courses,
        }
    },
    
    computed: {
        ...mapGetters('main', ['finalCount','fullNameValue'])
    },

    methods: {
        showLetters(){
                console.log(this.$store.state.courses.a.school);
                console.log(this.$store.state.courses.a.alphabet);
        },

        showProductMutation(){
            // this.$store.commit('courses/showModule');
            // this.$store.commit('courses/showAlphabet');

            // this.$store.commit('courses/a/showSubModule');
            this.$store.dispatch('courses/a/showAlphabet');
        }
    }
}
</script>
<style scoped>

div{

    padding:20px;
    margin: 4px 0px;
    background: #FFF7E9;
}
.btn{
    padding:20px;
margin: 4px 0;
}

</style>