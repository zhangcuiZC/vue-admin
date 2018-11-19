export default {
  business: [
    {
      name: "user",
      title: "用户管理",
      icon: "md-people",
      children: [
        {
          name: "list",
          title: "用户信息",
          to: "/business/user/list"
        },
        {
          name: "new",
          title: "添加商户",
          to: "/business/user/new",
          hidden: true,
          parent: "list"
        },
        {
          name: "info",
          title: "用户详情",
          to: "/business/user/info",
          hidden: true,
          parent: "list"
        },
        {
          name: "relation",
          title: "客勤关系",
          to: "/business/user/relation"
        },
        {
          name: "join",
          title: "接入管理",
          to: "/business/user/join"
        }
      ]
    },
    {
      name: "check",
      title: "对账管理",
      icon: "md-code-working",
      children: [
        {
          name: "channel",
          title: "通道管理",
          to: "/business/check/channel"
        },
        {
          name: "newChannel",
          title: "用户详情",
          to: "/business/check/newChannel",
          hidden: true,
          parent: "channel"
        },
        {
          name: "parse",
          title: "解析器管理",
          to: "/business/check/parse"
        },
        {
          name: "mode",
          title: "对账模式管理",
          to: "/business/check/mode"
        }
      ]
    }
  ]
};
