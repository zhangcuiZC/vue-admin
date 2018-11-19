<template>
  <div class="header">
    <div class="logoBox">
      <Logo class="headerLogo" :class="darkTheme ? 'darkLogo' : ''" />
    </div>

    <div class="menu">
      <Menu mode="horizontal" theme="light" :active-name="root" class="headerMenu">
        <MenuItem v-for="item in headerMenuList" :name="item.name" :key="item.name">
        <router-link :to="item.to">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </router-link>
        </MenuItem>
      </Menu>
    </div>
    
    <div class="userInfo">
      <Dropdown placement="bottom-end">
        <span>
          <Avatar class="avatar">{{userName&&userName[0].toUpperCase()}}</Avatar>
          <span class="welcome">你好，</span>{{userName}}
          <Icon class="icon" type="md-menu"></Icon>
        </span>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="md-create"></Icon> 修改密码</DropdownItem>
          <DropdownItem @click.native="logout">
            <Icon type="md-exit"></Icon> 退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../theme/constant.less";
.header {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
}
.logoBox {
  float: left;
  height: 100%;
  .headerLogo {
    box-shadow: 0 1px 9px -3px rgba(0, 0, 0, 0.2);
  }
  .darkLogo {
    color: #fff;
    background: #515a6e;
  }
}
img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.menu {
  float: left;
  height: 100%;
  overflow: hidden;
}
.userInfo {
  height: 100%;
  float: right;
  font-size: 13px;
  color: @color-black2;
  margin-right: 20px;
  display: flex;
  align-items: center;
  cursor: default;
  .avatar {
    margin-right: 5px;
  }
  .welcome {
    color: @color-black3;
  }
  .icon {
    font-size: 24px;
    margin-left: 10px;
  }
  span {
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="less">
.header {
  .headerMenu {
    background: transparent;
    height: 71px;
    line-height: 70px;
  }
  .headerMenu li {
    color: rgba(255, 255, 255, 0.7) !important;
    border-bottom-width: 0px !important;
  }
  .headerMenu .ivu-menu-item-selected {
    background: #f0faff;
    a {
      color: #2d8cf0 !important;
    }
  }
  .headerMenu .ivu-menu-item {
    padding: 0;
    width: 120px;
    text-align: center;
    a {
      width: 100%;
      color: #657180;
      display: inline-block;
      height: 100%;
    }
  }
}
</style>

<script>
import { getCookie, delCookie } from "../utils/cookie.js";
import {
  Avatar,
  Menu,
  Icon,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "iview";
import headerMenuList from "../config/headerMenu.js";
import Logo from "../components/Logo";
export default {
  name: "MainHeader",
  components: {
    Avatar,
    Menu,
    Icon,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Logo
  },
  data() {
    return {
      headerMenuList,
      userName: getCookie("userName")
    };
  },
  computed: {
    darkTheme() {
      return this.$store.state.app.darkTheme;
    }
  },
  props: ["root"],
  methods: {
    logout() {
      delCookie("userName");
      this.$router.push({ path: "/login" });
      this.$store.dispatch({
        type: "app/logout"
      });
    }
  }
};
</script>