import UserList from "@/pages/Business/User/Info/List";
import UserCreate from "@/pages/Business/User/Info/Create";
const MainView = { template: "<router-view></router-view>", name: "MainView" };

export default [
  { path: "", redirect: "info" },
  {
    path: "info",
    component: MainView,
    children: [
      {
        path: "",
        name: "UserList",
        component: UserList
      },
      {
        path: "create",
        name: "UserCreate",
        component: UserCreate
      }
    ]
  }
];
