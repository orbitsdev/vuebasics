

<template>
  <div>

    <form @submit.prevent="submitForm">
      <div>
        <label for="email"> Your E-Mail</label>
        <input type="email" id="email" v-model.trim="email"> 
      </div>
      <div>
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="5" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid"> Please Supply all fields </p>
      <div class="actions">
        <br>
        <BaseButton>Send Messsage</BaseButton>
      </div>
    </form>
  </div>

   
</template>


<script>

import BaseButton from '@/components/BaseButton';
export default{

    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,

        }
    },
    components: {
        BaseButton,
    },
    methods: {
        submitForm() {

            if(this.email ==='' || !this.email.includes('@') || this.message ===''){
                this.formIsValid = false;
                return;
            }
            

            this.$store.dispatch('requestModule/sendRequest',{
                 coachId: this.$route.params.id,
                email: this.email,
                message: this.message,
            } );

            this.$router.replace('/request');
        }
    },

}
</script>


<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
  }
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }
  
  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }
  
  .errors {
    font-weight: bold;
    color: red;
  }
  
  .actions {
    text-align: center;
  }
</style>