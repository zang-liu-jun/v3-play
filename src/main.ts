import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import * as ElIcons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "@/assets/style/initialize.scss";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus);
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}

app.mount("#app");
