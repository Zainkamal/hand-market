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
          children: [
            {
              path: "",
              component: () => import("../components/Semuacategori.vue"),
            },
            {
              path: "/diminati",
              component: () => import("../components/Diminati.vue"),
            },
            {
              path: "/terjual",
              component: () => import("../components/Terjual.vue"),
            },
          ],
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
      path: "/halaman/:id",
      component: () => import("../views/Halamanproduct.vue"),
    },
    {
      path: "/infoproduct",
      component: () => import("../views/Infoproduct.vue"),
    },
    {
      path: "/infoproduct/:id",
      component: () => import("../views/Infoproduct.vue"),
    },
    {
      path: "/product/:id",
      component: () => import("../views/Producthalaman.vue"),
    },
    {
      path: "/infopenawaran/:id",
      component: () => import("../views/Infopenawaran.vue"),
    },
    {
      path: "/tawaransaya",
      name: "Tawaran",
      component: () => import("../views/Tawaransaya.vue"),
    },
  ],
});

export default router;
