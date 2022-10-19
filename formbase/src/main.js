import {createApp} from 'vue';
import App from './App.vue';

import {router} from './components/router';
import {store}  from './components/store';
const app  = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

