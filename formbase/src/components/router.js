import {createRouter, createWebHistory} from 'vue-router';


import HomeScreen from '@/components/pages/HomeScreen';
import ManageUserScreen from '@/components/pages/ManageUserScreen';

const routes  = [
    {
        path: '/home',
        component: HomeScreen
    },
    
    {
        path: '/manage-user',
        component: ManageUserScreen
    },

];

export const router  = createRouter({
    history: createWebHistory(),
    routes: routes
 });
 