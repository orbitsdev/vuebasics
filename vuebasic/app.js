const { createApp } = Vue;

createApp({
  data() {
    return {
      goals: [],
      boxes: [],
      isShow: false,
      selectedIndex: null,
      form: {
        title: "",
        text: "",
      },
   
    }
  },

  methods: {

    selectedBox(index){

        this.boxes[index].value =  !this.boxes[index].value;

    },
    
    boxSelected(){
        
    },

    updateGoal(){

   
        if(this.selectedIndex!== null){
            this.goals[this.selectedIndex].title = this.form.title;
            this.goals[this.selectedIndex].text = this.form.text;
            this.selectedIndex = null;
            this.clearForm();

          
        }
    },

    clearForm(){
      this.form.title = '';
      this.form.text = '';
    },
    selectedGoal(index){
       this.form.title =    this.goals[index].title;
       this.form.text =    this.goals[index].text;
       this.selectedIndex = index;
    },

  
    removeGoal(index){

      if(confirm('Are you sure do you wan to delete this')){

        this.goals.splice( index, 1);
        
        if(this.selectedIndex !== null && this.selectedIndex == index){
          this.clearForm();
          this.selectedIndex = null;
        }
      }
   

    },
    addGoal() {
      let goal = {
        title: this.form.title,
        text: this.form.text,
      };
      this.goals.push(goal);
      if(this.selectedIndex !==null){
        this.selectedIndex = null;
      }
      this.clearForm();
    },
    showRandomeText(){
    
    }
  },
  computed: {
   
     randomText(){
        const randomNumber = Math.floor(Math.random() * 100);
        return randomNumber.toString();
     }

  },

  created() {

    this.boxes = [
        {
            id:1,
            value:false,
        },
        {
            id:2,
            value:false,
        },
       
    ]; 

   
  },
}).mount("#app");
