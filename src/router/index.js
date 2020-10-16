import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Class from '../views/Class.vue';
import Cards from '../components/Cards';
import Task from '../components/Task';
import Admin from '../views/Admin'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/class/:cid",
    name: "Class",
    component: Class,
    props: true,
    redirect: "/class/:cid/cards",
    children: [
      { path: "cards", name: 'Cards', component: Cards },
      { path: "task/:tid", name: "Task", component: Task, props: true, }
    ]
  },
  {
    path: '/admin/:aid',
    name: 'class',
    component: Admin,
    props: true

  }
];

const router = new VueRouter({
  routes
});

export default router;
