

<template>
<div>

    <!-- <button @click="error='dasdsad'">Show</button> -->
    <BaseModal :show="!!error" @close="closeModal">
    <p>{{error  }}</p>
    </BaseModal>
    <section>

    <CoachFilter @changeFilter="setFilters"/>
</section>


<section>
    <base-card>
    <div class="controls">
        <BaseButton mode="outline" @click="loadCoaches(true)">
            Refresh
        </BaseButton>

        <BaseButton v-if="!isLogin" link to="/login?redirect=resgistration"> 
            Login To Register Coach
        </BaseButton>
        <BaseButton v-if=" isLogin && !isCoach && !isLoading" link to="/resgistration" > 
            Register Coache 
        </BaseButton>

    </div>
    <BaseSpinner v-if="isLoading"/>

    <ul v-else-if="hasCoaches">
        <coach-item v-for="coache in filteredCoaches" :key="coache.id" 
        :id="coache.id"
        :firstName="coache.firstName" 
        :lastName="coache.lastName" 
        :rate="coache.hourlyRate" 
        :areas="coache.areas"
        >
        </coach-item>       
   </ul> 
   <div v-else>
    <h1> No Coaches Found</h1>
   </div>
</base-card>
        </section>
        </div>
    </template>





<script>
import CoachItem from '@/components/layout/coaches/CoachItem.vue';
import BaseCard from '../../components/Ui/BaseCard.vue';
import BaseButton from '@/components/BaseButton';
import CoachFilter from '@/components/layout/coaches/CoachFilter';
import BaseSpinner from '@/components/Ui/BaseSpinner';
import BaseModal from '@/components/Ui/BaseModal';
export default {
    created () {
        this.loadCoaches();
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend:true,
                career: true,
            },
            isLoading: false,
            error: null,
        }
    },

    methods: {

        closeModal(){

            this.error = null;
        },
        async loadCoaches(refresh = false){  
            this.isLoading = true;

            try{
                await this.$store.dispatch('coachesModule/loadCoaches', {foreRefresh:refresh});
                
            }catch(e){
                this.error = e.messagge || 'Something Went Wrong';
            }
            this.isLoading = false;
        },
        setFilters(updatedFilters){ 
        console.log('emit called');
        console.log(updatedFilters);
            this.activeFilters = updatedFilters;
        }
    },
    computed: {

        isLogin(){
            return this.$store.getters.isAuthenticated;
        },
        isCoach(){
        return this.$store.getters['coachesModule/isCoach'];
      }  ,
        filteredCoaches(){
           const coaches = this.$store.getters['coachesModule/coaches'];
           return coaches.filter(e=>{
            if(this.activeFilters.frontend &&  e.areas.includes('frontend')){
                return true;
            }
            if(this.activeFilters.backend &&  e.areas.includes('backend')){
                return true;
            }
            if(this.activeFilters.career &&  e.areas.includes('career')){
                return true;
            }


            return false;
           });

          

         
         
        },
        hasCoaches(){
            return !this.isLoading &&  this.$store.getters['coachesModule/hasCoaches']
        }

    },
    components: { CoachItem, BaseCard, BaseButton, CoachFilter, BaseSpinner, BaseModal }
}
</script>


<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>