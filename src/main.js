import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const toastOption = {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-center",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: false,
  icon: true,
  rtl: false,
};

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$toast = useToast();

app
  .use(Toast, toastOption)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
