export default {
    namespaced: true,
    state(){

        return {
            count: 0,
            fullname: 'Kate Romoe',
            courses : [
                {
                    id:1,
                    title: 'Laravel',
                    total_hour: '42'
                },
                {
                    id:2,
                    title: 'Laravel',
                    total_hour: '42'
                },
                {
                    id:3,
                    title: 'Laravel',
                    total_hour: '42'
                },
            ],
        }
    },

    mutations: {
        
        showModuleName(){
            console.log('Form Maij Moudle');
        },

        addOne(state){
            state.count++
        },
        changeName(state, payload){
            state.fullname = payload.value;
        }

    },

    actions: {

        showModuleName({commit}){
            console.log('from action of main module');
            commit('showModuleName');
        },
        addOne(context){
            context.commit('addOne');
        },
        changeName({commit}, payload){
            console.log(payload);
            commit('changeName', payload);
        }
    },

    getters: {
        finalCount(state){
            return state.count;
        },

        fullNameValue(state){
            return state.fullname;
        }
    }
}