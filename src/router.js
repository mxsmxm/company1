import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Contact from "@/components/Contact.vue";
import Profile from "@/components/Profile.vue";
import Signup from "@/components/Signup.vue";

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
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
