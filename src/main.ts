import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { nl, en } from 'vuetify/locale';

import App from './App.vue';
import ErkenningItemView from './components/calder/ErkenningItemView.vue';
import FancyListView from './components/fancylist/FancyListView.vue';

const app = createApp(App);

app.use(createPinia());
app.use(
  createVuetify({
    locale: {
      locale: 'nl',
      fallback: 'en',
      messages: { nl, en },
    },
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
