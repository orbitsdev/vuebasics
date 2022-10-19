export default {
  showModule({ commit }) {
    console.log("from action");
    commit("showModule");
  },

  addRequest(context, payload) {
    const newRequest = {
      id: new Date().toString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit("addRequest", newRequest);
  },

  async sendRequest(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vuebasisc-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Faild to add new data");
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("sendRequest", newRequest);
  },

  async fetchRequest(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vuebasisc-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=`+token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Faile to fercg data");
      throw error;
    }

    const requests = [];
    for(const key in responseData){
        const request ={
            id: key,
            coachId: coachId,
            userEmail:  responseData[key].userEmail,
            message:  responseData[key].message,


        };
        requests.push(request);
    }

    context.commit('setRequest',requests);

  },
};
