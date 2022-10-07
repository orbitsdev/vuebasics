import { createApp } from 'vue'



import App from './App.vue'
import BaseCard from '@/components/UI/BaseCard';
import AlertModal from '@/components/UI/AlertModal';


const app = createApp(App);
app.component('base-card', BaseCard);
app.component('alert-modal', AlertModal);
app.mount("#app");
