import ChannelList from "@/pages/Business/Check/Channel/List";
import ChannelCreate from "@/pages/Business/Check/Channel/Create";
import ParseList from "@/pages/Business/Check/Parse/List";
import ParseCreate from "@/pages/Business/Check/Parse/Create";
const MainView = { template: "<router-view></router-view>", name: "MainView" };

export default [
  { path: "", redirect: "channel" },
  {
    path: "channel",
    component: MainView,
    children: [
      { path: "", name: "ChannelList", component: ChannelList },
      { path: "create", name: "ChannelCreate", component: ChannelCreate }
    ]
  },
  {
    path: "parse",
    component: MainView,
    children: [
      { path: "", name: "ParseList", component: ParseList },
      { path: "create", name: "ParseCreate", component: ParseCreate }
    ]
  }
];
