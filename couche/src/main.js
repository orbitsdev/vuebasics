




import { createApp } from "vue";
import App from './App.vue';
import router from './router/index';

import BaseCard from '@/components/Ui/BaseCard';
import BaseBadge from '@/components/Ui/BaseBadge';
import BaseButton from '@/components/BaseButton';
import BaseSpinner from '@/components/Ui/BaseSpinner';
import BaseModal from '@/components/Ui/BaseModal';
import store from './store/index';


const app  =  createApp(App)
app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);
app.component('base-modal', BaseModal);




app.mount("#app");