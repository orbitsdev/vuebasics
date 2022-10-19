<template>
    <BaseCard>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname " v-model.trim="firstName.val" @blur="clearValidity('firstName')">
            <p v-if="!firstName.isValid">Firstname must no be empty</p>
          </div>
          <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname " v-model.trim="lastName.val" @blur="clearValidity('lastName')">
            <p v-if="!lastName.isValid">Lastname must no be empty</p>
          </div>
          
          <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea name="description" rows="10" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Description must no be empty</p>
          </div>
          <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="number" id="rate " v-model.number="rate.val" @blur="clearValidity('rate')">
            <p v-if="!rate.isValid">Rate must be zero</p>
          </div>
          
          <div class="form-control" :class="{invalid: !areas.isValid}" @blur="clearValidity('areas')">
            <h3>Areas of Expertise</h3>
            <div>
              <input type="checkbox" id="frontend" v-model="areas.val" value="frontend">
              <label for="frontend">Front End Developer</label>
            </div>
            <div>
                <input type="checkbox" id="backend" v-model="areas.val" value="backend">
                <label for="backend">Backend Develpper</label>
            </div>
            <div>
                <input type="checkbox" id="career" v-model="areas.val" value="career">
                <label for="career">Career</label>
                <p v-if="!areas.isValid">You must select atlears one area</p>
            </div>
            <p v-if="!formIsValid">Please Fix the above erroe and submit again.</p>
          </div>
          
        <BaseButton> Submit</BaseButton>
    </form>

</BaseCard>

</template>


<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseCard from '@/components/Ui/BaseCard.vue';
export default{
    emits: ['save-data'],
    data() {
        return {
            firstName : {
              val: '',
              isValid: true,

            },
            lastName : {
              val: '',
              isValid: true,
            },
            description : {
              val: '',
              isValid: true,
            },
            rate : {
              val: null,
              isValid: true,
            },
            areas : {
              val: [],
              isValid: true,
            },
            formIsValid: true,
        }
    },
    methods: {
      clearValidity(input){
        this[input].isValid = true;
      },
        validateForm(){
            this.formIsValid= true;
            if(this.firstName.val ===''){
              this.firstName.isValid = false;
              this.formIsValid = false;

            }
            if(this.lastName.val ===''){
              this.lastName.isValid = false;
              this.formIsValid = false;

            }
            if(this.description.val ===''){
              this.description.isValid = false;
              this.formIsValid = false;

            }
            if(!this.rate.val|| this.rate.val <0){
              this.rate.isValid = false;
              this.formIsValid = false;

            }

            if(this.areas.val.length === 0){
              this.areas.isValid= false;
              this.formIsValid = false;
             }
        },
        submitForm(){

          this.validateForm();

          if(!this.formIsValid){
            return;
          }
          
            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description,
                rate: this.rate.val,
                areas: this.areas.val,
            }

            this.$emit('save-data', formData);
        } 
    },
    components: { BaseButton, BaseCard }
}
</script>

<style scoped>

.form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }
  
  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }
  
  input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
  }
  
  input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
  }
  
  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  
  .invalid label {
    color: red;
  }
  
  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
</style>