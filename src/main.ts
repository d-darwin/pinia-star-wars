import { createApp } from "vue";
import App from "./app";
import { createPinia } from "pinia";
import "./index.css";

createApp(App).use(createPinia()).mount("#app");
