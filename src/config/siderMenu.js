export default {
  business: [
    {
      name: "user",
      title: "用户管理",
      icon: "md-people",
      children: [
        {
          name: "info",
          title: "用户信息",
          to: "/business/user/info",
          children: [
            {
              name: "create",
              title: "添加商户",
              to: "/business/user/info/create"
            },
            {
              name: "detail",
              title: "用户详情",
              to: "/business/user/info/detail"
            }
          ]
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
          to: "/business/check/channel",
          children: [
            {
              name: "create",
              title: "添加通道",
              to: "/business/check/channel/create"
            }
          ]
        },
        {
          name: "parse",
          title: "解析器管理",
          to: "/business/check/parse",
          children: [
            {
              name: "create",
              title: "新增解析规则",
              to: "/business/check/parse/create"
            }
          ]
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
