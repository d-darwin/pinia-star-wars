import { createApp } from "vue";
import App from "./app";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
