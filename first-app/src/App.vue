<template>

  <button @click="setSelectedComponent('manage-component')" > Manage Card</button>
  <button @click="setSelectedComponent('role-component')" >Role Card</button>
  <button> Produc Card</button>
  <!-- <div>
    {{ selectedComponent }}
    
    <student-card :students="students" v-if="selectedComponent === 'student-card'">
      <template  #default="students" >
        <p>{{ students.student.name }}</p>
      </template>
      </student-card> 


  </div> -->

  <!-- <div>
   <ProductCard :products="products" v-if="selectedComponent==='product-card'">
          <template #products="products">
            <p> {{ products.product.name }}</p>
          </template>
    </ProductCard> 
     
  
 
  </div> -->

<keep-alive>

  <component  :is="selectedComponent"> </component>
</keep-alive>

</template>

<script >
import StudentCard from './components/global/StudentCard.vue';
import ProductCard from './components/global/ProductCard.vue';
import ManageComponent from './components/ManageComponent.vue';
import RoleComponent from './components/RoleComponent.vue';

export default {
  name: 'App',

  components: {
    ProductCard,
    StudentCard,
    ManageComponent,
    RoleComponent
},

methods: {
  setSelectedComponent(name){
    console.log(name);
    this.selectedComponent = name;
  }
},

  data: () => ({
    selectedComponent: 'student-card',
    products: [
                {
                    id: 1,
                    name:'Mobile',
                },
                {
                    id: 2,
                    name:'Mac',
                },
                {
                    id: 3,
                    name:'Laptop',
                },
            ],

    students: [
                {
                    id: 1,
                    name:'Anna',
                },
                {
                    id: 2,
                    name:'Kate',
                },
                {
                    id: 3,
                    name:'Maria',
                },
            ]
  }),
}
</script>


<style scoped>

  p{
    background:orange;
    color:white;
    padding:12px 8px;
  }
</style>