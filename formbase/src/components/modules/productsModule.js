
export default{
    namespaced: true,
    state(){
        return {
            products: [
                {
                    id:1,
                    name: 'Mobile'
                },
                {
                    id:2,
                    name: 'Mobile'
                },
                {
                    id:3,
                    name: 'Laptop'
                },
            ],
        }
    },

    mutations: {
        showModule(){
            console.log('inse product modeule');
        }
    },
    actions: {
        showModule({commit}){
            commit('showModule');
        }
    }
}