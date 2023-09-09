import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router/routes";

/*const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});*/
const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
