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
  {
    path: "/finish",
    name: "GameFinish",
    component: () => import("@/pages/GameFinish.vue"),
  },
  {
    path: "/ranking",
    name: "GameRanking",
    component: () => import("@/pages/GameRanking.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
