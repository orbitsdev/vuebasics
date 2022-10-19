
import mutation from './request_mutation';
import action from './request_action';
import getters from './request_getters';
export default {
    namespaced: true,

    state(){
        
        return {
            count: 1,
            isAdmin: 'admin',
            requests: [],
        }
    },

    mutations:mutation,
    actions: action,
    getters:getters
}