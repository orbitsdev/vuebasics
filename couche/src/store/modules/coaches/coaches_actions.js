
export default {
    showModule({commit}){
        console.log('action');
        commit('showModule');
    },

    increase({commit}){
        console.log('action');
      commit('increase');
    },


   async registerCoaches(context, payload){

      
        const userId  =  context.rootGetters.userId;
        const coahData = {
            firstName: payload.first,
            lastName: payload.last,
            areas: payload.areas,
            description:payload.desc,
            hourlyRate: payload.rate
           
        };
    const token = context.rootGetters.token;
  const response = await fetch(`https://vuebasisc-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
        method: 'PUT',
        body: JSON.stringify(coahData),
        
    });


    // const responseData =  await response.json();
    if(!response.ok){
        const error =  new Error( response.message || 'Faild to fetch');
        throw  error;
    }
    context.commit('registerCoaches',{
        ...coahData,
        id:userId
    } );
},

async loadCoaches(context, payload){

    if(!payload.foreRefresh && !context.getters.shoudUpdate){
        return;
    }
    const response =  await  fetch(`https://vuebasisc-default-rtdb.firebaseio.com/coaches.json`);
    const responseaData =  await response.json();
    if(!response.ok){
        
        console.log(response.status)
   }

   const coaches = [];
   for(const key in responseaData){
        const coach = {
            id: key,
            firstName: responseaData[key].firstName,
            lastName: responseaData[key].lastName,
            areas: responseaData[key].areas,
            description:responseaData[key].description,
            hourlyRate: responseaData[key].hourlyRate
        };

        coaches.push(coach);
        context.commit('setCoaches',coaches );
        context.commit('setFetchTimestamp');
   }

    },

    
     
}