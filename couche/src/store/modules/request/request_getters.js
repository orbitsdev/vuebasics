

export default {


    requestCount(state){
       return  state.count;
    },


    showIsAdmin(state){
        return state.isAdmin === 'admin' ;
    },

    requests(state,getters, rootState, rootGetters){
        const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === coachId);
    },

    hasRequest(state, getters){
        return getters.requests && getters.requests.length > 0;
    },


    filteredRequest(state, getters,  ){

        return getters.userId; 
    }








}