import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(
  createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }),
);
app.use(router);

app.mount('#app');
