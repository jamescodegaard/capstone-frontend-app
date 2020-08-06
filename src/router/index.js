import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/BusinessesIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import BusinessesIndex from "../views/BusinessesIndex.vue";
import BusinessesShow from "../views/BusinessesShow.vue";
import BusinessesEdit from "../views/BusinessesEdit.vue";
import EventsIndex from "../views/EventsIndex.vue";
import EventsNew from "../views/EventsNew.vue";
import EventsShow from "../views/EventsShow.vue";
import EventsEdit from "../views/EventsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/businesses",
    name: "businesses-index",
    component: BusinessesIndex,
  },
  {
    path: "/businesses/:id",
    name: "businesses-show",
    component: BusinessesShow,
  },
  {
    path: "/businesses/:id/edit",
    name: "businesses-edit",
    component: BusinessesEdit,
  },
  {
    path: "/events",
    name: "events-index",
    component: EventsIndex,
  },
  {
    path: "/events/new",
    name: "events-new",
    component: EventsNew,
  },
  {
    path: "/events/:id",
    name: "events-show",
    component: EventsShow,
  },
  {
    path: "/events/:id/edit",
    name: "events-edit",
    component: EventsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
