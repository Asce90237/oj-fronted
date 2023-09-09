import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "@/access";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "bytemd/dist/index.css";
// import "highlight.js/styles/darcula.css";
import "katex/dist/katex.css";

const app = createApp(App);
app.use(ArcoVue);
app.use(store);
app.use(router);
app.use(ArcoVueIcon);
app.mount("#app");
