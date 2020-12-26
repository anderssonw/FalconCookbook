import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Versus from "../views/Versus.vue";

const routes = [
  {
    path: "",
    component: Home,
    children: [
      {
        path: "vs",
        name: "Versus",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Versus,
        children: [],
      },
      {
        path: "vs/:character",
        name: "VersusChar",
        component: () => import("../views/VersusChar.vue"),
      },
      {
        path: "vs/:character/:fundamental",
        name: "VersusCharFundamental",
        component: () => import("../views/VersusCharFundies.vue"),
      },
    ],
  },
  {
    path: "*",
    component: Vue.component("FourOFour", {
      render: (createElement) => createElement("h1", "404 not found"),
    }),
    name: "404",
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
