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
      {
        path: "func/drag",
        name: "drag",
        component: () =>
          import("@/components/show-function/draggable/ShowDrag.vue"),
      },
      {
        path: "func/lazy-load",
        name: "lazy",
        component: () =>
          import("@/components/show-function/lazyLoad/ShowLazyLoad.vue"),
      },
      {
        path: "func/websocket",
        name: "websocket",
        component: () =>
          import("@/components/show-function/websocket/ShowWebSocket.vue"),
      },
      {
        path: "components/drag-load",
        name: "dragLoad",
        component: () =>
          import("@/components/show-components/dragLoad/ShowDragLoad.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
