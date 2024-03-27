import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(createVuetify({}));
app.use(router);

app.mount('#app');
