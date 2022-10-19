



import { createRouter ,createWebHistory} from "vue-router";

import  CoachDetailsView from '@/views/coaches/CoachDetailsView';
import CoachestListView from '@/views/coaches/CoachestListView';
import CoachRegistrationView from '@/views/coaches/CoachRegistrationView';
import ContactView from '@/views/request/ContactView';
import NotFoundView from '@/views/errors/NotFoundView';
import RequestView from '@/views/request/RequestView';
import UserAuth from '@/views/UserAuth';

import store from "@/store";

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachestListView },
        { path: '/coaches/:id', 
        component: CoachDetailsView, 
        props:true,
        children: [
            { path: 'contact', component: ContactView },

        ] },
        { path: '/login', component: UserAuth, meta: {guest: true} },
        { path: '/resgistration', component: CoachRegistrationView, meta: {auth: true} },
        { path: '/request', component: RequestView, meta: {auth: true} },
        { path: '/:notFound(.*)', component: NotFoundView },
    ]
});


router.beforeEach(function(to, _, next){


    if(to.meta.auth && !store.getters.isAuthenticated ){
        next('/login');
    }else if(to.meta.guest && store.getters.isAuthenticated){
        next('/coaches');
        
    }else{
        next();
    }
});


export default router;



