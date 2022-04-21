import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home.vue"),
    children: [
      {
        path: "func/clipboard",
        name: "clipboard",
        component: () =>
          import("@/components/show-function/clipboard/ClipBoard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
