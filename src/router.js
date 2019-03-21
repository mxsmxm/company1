import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Contact from "@/components/Contact.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Movies from "@/components/Movies.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
