import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import { createPinia } from "pinia";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(router);

app.mount("#app");
