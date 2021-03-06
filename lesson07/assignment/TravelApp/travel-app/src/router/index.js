import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/DestinationDetails",
    name: "DestinationDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails.vue")
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Brazil.vue")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hawaii.vue")
  },
  {
    path: "/Jamaica",
    name: "Jamaica",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Jamaica.vue")
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Panama.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
