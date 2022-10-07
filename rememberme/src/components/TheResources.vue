<template>

    <TheHeader />
  <div class="section">
    <BaseCard>
        <div>
          <BaseButton
            @click="setSelectedComponent('stored-resources')"
            :class="[selectedComponent === 'stored-resources' ? 'active' : '']"
            :text="'Stored Resources'"
          />
          <BaseButton
            @click="setSelectedComponent('add-resources')"
            :class="[selectedComponent === 'add-resources' ? 'active' : '']"
            :text="'Add Resources'"
          />
        </div>
    </BaseCard>
    <keep-alive>
      <component :is="selectedComponent" ></component>
    </keep-alive>
  </div>
</template>

<script>
import AddResources from '@/components/AddResources';
import StoredResources from '@/components/StoredResources';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from './UI/BaseButton.vue';
import TheHeader from './UI/TheHeader.vue';
export default {

    
    components: {
    AddResources,
    StoredResources,
    BaseCard,
    BaseButton,
    TheHeader
},

    provide(){
       return {
           resources: this.storedCollection ,
           addNewResource: this.addNewResource,
           removeResource: this.removeResource,

       }

    },
  data() {
    return {
      selectedComponent: "stored-resources",
      storedCollection: [
        {
          id: 1,
          title: "title1",
          description: "lorem lorem lorem lorem lorem ",
          link: "facbook.com",
        },
        {
          id: 2,
          title: "title1",
          description: "lorem lorem lorem lorem lorem ",
          link: "facbook.com",
        },
        {
          id: 3,
          title: "title1",
          description: "lorem lorem lorem lorem lorem ",
          link: "facbook.com",
        },
       
      ]
    };
  },

  methods: {
    setSelectedComponent(selected) {
      this.selectedComponent = selected;
    },
    
    addNewResource(title, description, link ){
        const newResource = {
            id: this.storedCollection.length + 1,
            title: title,
            description:description,
            link:link,
        }

        this.storedCollection.push(newResource);

        this.selectedComponent = 'stored-resources';
    },

    removeResource(index){
    
        this.storedCollection.splice(index, 1);
 
      
        
    }

    
  

    
  },
};
</script>

<style scoped>
.section{
    margin: 20px;
}

</style>
