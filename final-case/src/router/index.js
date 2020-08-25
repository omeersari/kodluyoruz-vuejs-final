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
    path: "/addbook",
    name: "Add Book",
    component: () => import("../views/BookOperations/Add")
  },
  {
    path: "/booklist",
    name: "Book List",
    component: () => import("../views/BookOperations/BookList")
  },
  {
    path: "/setuser",
    name: "Set",
    component: () => import("../views/UserOperations/Set")
  },
  {
    path: "/getuser",
    name: "Get",
    component: () => import("../views/UserOperations/Get")
  },
  {
    path: "/search/:search",
    name: "Search",
    component: () => import("../views/Search")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
