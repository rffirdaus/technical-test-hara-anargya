import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import router from './router'
import App from "./App.vue";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(router);
app.component("Icon", Icon);
app.mount("#app");