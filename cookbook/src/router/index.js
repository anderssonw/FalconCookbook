import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Base from '../views/Base.vue'
import Versus from '../views/Versus.vue'
import Playground from '../views/Playground.vue'

const routes = [
  {
    path: '',
    component: Base,
    children: [
      {
        path: '/playground',
        name: 'Playground',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Playground,
        children: [],
      },
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
        children: [],
      },
      {
        path: 'vs',
        name: 'Versus',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Versus,
        children: [],
      },
      {
        path: 'vs/:character',
        name: 'VersusChar',
        component: () => import('../views/VersusChar.vue'),
        children: [
          {
            path:'play',
            component: () => import("../views/Playground.vue")
          }
        ]
      },
      {
        path: 'vs/:character/:fundamental',
        name: 'VersusCharFundamental',
        component: () => import('../views/VersusCharFundies.vue'),
      },
    ],
  },
  {
    path: '*',
    component: Vue.component('FourOFour', {
      render: (createElement) => createElement('h1', '404 not found'),
    }),
    name: '404',
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
