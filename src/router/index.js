import Vue from "vue";
import Router from "vue-router";
import { Message } from "iview";
import { getCookie } from "@/utils/cookie";
import Settings from "@/components/Settings.vue";
import MainLayout from "../layouts/Main/Index.vue";
import NotFound from "../pages/Error/NotFound.vue";
import Login from "../pages/Login/Login.vue";

import business from "./business/index";

const MainView = { template: "<router-view></router-view>", name: "MainView" };

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: "/echeck-admin-boss/admin/",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "", redirect: "business" },
        {
          path: "business",
          children: business,
          component: MainView
        },
        { path: "settings", name: "Settings", component: Settings }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  // const isLogin = getCookie("userName");
  // if (to.path === "/login" && isLogin) {
  //   Message.success("您已成功登录平台");
  //   return next({ path: "/" });
  // }
  // if (!isLogin && to.path !== "/login") {
  //   return next({ path: "/login" });
  // }
  return next();
});

export default router;
