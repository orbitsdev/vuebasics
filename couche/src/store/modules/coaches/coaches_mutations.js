export default  {
    showModule(){
      console.log('coach muta');
    },


    increase(state){
        state.count++;
    },


    registerCoaches(state, payload){
      console.log(payload);
      state.coaches.push(payload);
    },

    setCoaches(state, payload){
      state.coaches = payload;
    },

    setFetchTimestamp(state){
      state.lastFetch =   new Date().getTime();
    }
  }