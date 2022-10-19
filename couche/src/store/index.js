

import { createStore } from "vuex";


import requestModule from './modules/request/index';
import coachesModule from './modules/coaches/index';
import authModule from "./modules/auth";
const store =  createStore({



  namespaced: true,
  
  state(){
    return {
      
     
     

  }
  },
  modules:{
    auth: authModule,
    coachesModule: coachesModule,
    requestModule:requestModule
  },

  mutations: {

    TestMutation(){
      console.log('mustaiton from main')
    }

  },
  getters:{
   
  }

});


export default store;