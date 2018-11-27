import user from "./user";
import check from "./check";
const MainView = { template: "<router-view></router-view>", name: "MainView" };

export default [
  { path: "", redirect: "user" },
  {
    path: "user",
    component: MainView,
    children: user
  },
  {
    path: "check",
    component: MainView,
    children: check
  }
];
