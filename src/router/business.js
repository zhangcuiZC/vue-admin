import UserList from "@/pages/Business/User/List";
import UserNew from "@/pages/Business/User/New";
import Channel from "@/pages/Business/Check/Channel";
import NewChannel from "@/pages/Business/Check/NewChannel";
import Parse from "@/pages/Business/Check/Parse";
const MainView = { template: "<router-view></router-view>", name: "MainView" };

export default [
  { path: "", redirect: "user" },
  {
    path: "user",
    component: MainView,
    children: [
      { path: "", redirect: "list" },
      { path: "list", name: "List", component: UserList },
      { path: "new", name: "New", component: UserNew }
    ]
  },
  {
    path: "check",
    component: MainView,
    children: [
      { path: "", redirect: "channel" },
      { path: "channel", name: "Channel", component: Channel },
      { path: "newChannel", name: "NewChannel", component: NewChannel },
      {
        path: "parse",
        name: "Parse",
        component: Parse
      }
    ]
  }
];
