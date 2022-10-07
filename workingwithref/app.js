


const app = Vue.createApp({
   
    beforeCreate() {
        console.log('before create')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('before mounted')
    },
    
    mounted() {
        console.log('mounted')
    },
    
    beforeUpdate() {
        
        console.log('befor eupdate')
        
    },
    
    updated() {
        console.log('befor eupdate')
    },

    data() {
        return {
            name: '',
            inputname: 'ddsadsad',
        }
    },

    methods: {
        updateText(){
            this.name = this.inputname;
        }
    },

 
});

app.mount('#app');