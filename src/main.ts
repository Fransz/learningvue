import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(
  createVuetify({
    components,
    directives,
  }),
);
app.use(router);

app.mount("#app");
