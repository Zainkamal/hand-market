import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../Layout/Primarylayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/daftarjual",
          component: () => import("../views/Daftarjual.vue"),
        },
        {
          path: "/semuacategori",
          component: () => import("../components/Semuacategori.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },

    {
      path: "/infoprofile",
      component: () => import("../views/Infoprofile.vue"),
    },
    {
      path: "/halamanproduct",
      component: () => import("../views/Halamanproduct.vue"),
    },
    {
      path: "/infoproduct",
      component: () => import("../views/Infoproduct.vue"),
    },
    {
      path: "/producthalaman",
      component: () => import("../views/Producthalaman.vue"),
    },
  ],
});

export default router;
