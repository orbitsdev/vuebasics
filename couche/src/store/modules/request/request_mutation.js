export default {
    showModule(){
        console.log('request mutation')
    },

    
    sendRequest(state,payload){


        state.requests.push(payload);

        

    },

    setRequest(state,payload){

        state.requests = payload;

    }


    
}