
import {createStore} from 'vuex';


import courseModule from './modules/courseModule';
import productsModule from '@/components/modules/productsModule';
import mainModule from './modules/mainModule';
export const store =  createStore({
    
    modules: {
        courses:courseModule,
        products:productsModule,
        main: mainModule,

    },
   
});
