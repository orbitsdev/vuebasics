



<template>
    <base-card class="parentz">

    <form @submit.prevent="submitForm">

        <div class="box">
            
            <h1>Title</h1>
            <input type="text" v-model="form.title" >
        </div>
        <div class="box">

            <h1>Description</h1>
            <textarea v-model="form.description" >

            </textarea>
        </div >
        <div class="box">

            <h1>Link</h1>
            <input type="text" v-model="form.link">
        </div>
        <BaseButton :text="'Add Resources'" class="addbtn"    />
    </form>
        

</base-card>
<teleport to="body">
    <alert-modal v-if="validated">
        <template #title>

            Please Input all Fields
        </template>
        <template #footer>
            <button @click="validated=false"> Ok</button>
        </template>
    </alert-modal>

</teleport>
</template>

<script>
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import AlertModal from './UI/AlertModal.vue';
    export default {
        methods: {

            showAlert(){
                this.validated = true;
            },
            submitForm() {
                // console.log(this.form.title);
                // console.log(this.form.description);
                // console.log(this.form.link);

                if(this.form.title.trim()==='' || this.form.description.trim() === '' || this.form.link ===''){

                    this.showAlert();
                }else{

                    this.addNewResource(this.form.title,this.form.description,this.form.link);
                    this.clearForm();
                }
            },

            clearForm(){
                this.form.title ='';
                this.form.description ='';
                this.form.link ='';
            },

            
        
        },

    created(){
        return {
            validated: false,
        }

    },
    data() {
        return {
            form: {
                title: "",
                description: "",
                link: "",
            },
            validated: false,
        };
    },
    inject:[ "addNewResource"],
    components: { BaseCard, BaseButton, AlertModal }
}
</script>

<style scoped>
.parentz{
    margin:20px 0px;
}

.parent .box{
    margin:16px 0px;
}
h1{
    font-size: 20px;
    margin:4px 0px;
}
.addbtn{
    margin: 5px 0px;
    background: purple;
    color:white;
}

textarea{
    padding:4px 8px;
    width:100%;
    height:60px;
    border:1px solid gainsboro;
}

textarea:focus{
    outline: none;
    border:1px solid gray;
}

input{
    padding:4px  8px;
    width:100%;
    height: 20px;
    border:1px solid gainsboro;
}

input:focus{

    outline: none;
    border:1px solid gray;
}




</style>