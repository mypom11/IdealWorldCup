import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/MainPage.vue"),
  },
  {
    path: "/making",
    name: "Making",
    component: () => import("@/pages/MakingPage.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/pages/GamePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
