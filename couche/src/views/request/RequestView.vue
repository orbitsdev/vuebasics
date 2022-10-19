

<template>
    <div>

        <BaseModal @close="error=null" :show="!!error">
            {{ error }}
        </BaseModal>
        <button @click="error='hey'">Show Eroor</button>
        <section>
            <BaseCard>
                <header>
                    <h2>Request Recieved</h2>
                </header>
                <BaseSpinner v-if="isLoading"></BaseSpinner>
                <ul v-else-if="hasRequest && !isLoading">
                    <request-item v-for="request in recieveRequests" :key="request.id" :email="request.email" :message="request.message">
                        
                    </request-item>
                </ul>
                
                <h3 v-else>You haven't recieve any request yet! </h3>
            </BaseCard>
        </section>
    </div>
    
</template>


<script>
import BaseCard from '@/components/Ui/BaseCard.vue';

import RequestItem from '@/components/layout/request/RequestItem';
import BaseSpinner from '@/components/Ui/BaseSpinner.vue';
import BaseModal from '@/components/Ui/BaseModal.vue';
export default{


    mounted () {
        this.loadRequest();
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    methods: {
 async  loadRequest(){
        console.log('called');
        this.requestModule = true;
        try{
            await this.$store.dispatch('requestModule/fetchRequest');
            
        }catch(e){

            this.error = e.message  || "Eerrrow when fetching";

        }   
    }  
    },
    computed: {

        filteredRequest(){
            return this.$store.getters["requestModule/filteredRequest"];
        },
        account() {
            return "a";
        },
        recieveRequests() {
            return this.$store.getters["requestModule/requests"];
        },
        
        hasRequest(){
            return this.$store.getters["requestModule/hasRequest"];
        }
    },
    components: { BaseCard, RequestItem, BaseSpinner, BaseModal }
}
</script>


<style scoped>
header {
    text-align: center;
  }
  
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }
  
  h3 {
    text-align: center;
  }
</style>