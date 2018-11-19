<template>
  <Sider class="sider" v-if="siderMenuList">
    <Menu 
      :active-name="currentRouter.child" 
      :theme="darkTheme ? 'dark' : 'light'" 
      width="auto" 
      :open-names="[currentRouter.parent]" 
      class="siderMenu"
    >
      <Submenu 
        v-for="parent in siderMenuList" 
        :key="parent.name" 
        :name="parent.name" 
        v-if="!parent.role || parent.role.indexOf(crtRole) !== -1"
      >
        <template slot="title">
          <Icon :type="parent.icon"></Icon>
          {{parent.title}}
        </template>
        <MenuItem 
          @click.native="pushPage(child.to)" 
          v-for="child in parent.children" 
          :key="child.name" 
          :name="child.name" 
          v-if="!child.hidden"
        >
          {{child.title}}
        </MenuItem>
      </Submenu>
    </Menu>
    <div class="theme" :class="darkTheme ? 'darkTheme' : ''">
      <span>切换主题</span>
      <i-switch v-model="darkTheme">
        <span slot="open">暗</span>
        <span slot="close">明</span>
      </i-switch>
    </div>
  </Sider>
</template>

<style scoped lang="less">
.sider {
  background: #fff !important;
  overflow-x: hidden;
  position: relative;
  .theme {
    position: absolute;
    padding: 0 24px;
    bottom: 0;
    width: 100%;
    height: 40px;
    color: #464c5b;
    z-index: 901;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    &.darkTheme {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
.siderMenu {
  font-size: 12px;
  height: 100%;
  padding-bottom: 40px;
  &:after {
    display: none;
  }
}
.siderMenu li {
  font-size: 12px;
  color: #657180;
}
</style>
<style>
.sider .ivu-menu-submenu-title {
  font-weight: bold;
  color: #464c5b;
}
.sider .ivu-menu-item-selected {
  font-weight: bold;
}
</style>


<script>
import { Sider, Menu, Submenu, Icon, MenuItem, Switch } from "iview";
import siderMenu from "../config/siderMenu.js";
import { getCookie } from "../utils/cookie.js";
import Vue from "vue";

Vue.component("i-switch", Switch);

export default {
  name: "MainSider",
  components: {
    Sider,
    Menu,
    Submenu,
    Icon,
    MenuItem
  },
  props: ["currentRouter"],
  computed: {
    siderMenuList() {
      return siderMenu[this.currentRouter.root];
    },
    crtRole() {
      return getCookie("role");
    },
    darkTheme: {
      get() {
        return this.$store.state.app.darkTheme;
      },
      set(value) {
        window.localStorage.setItem("darkTheme", value);
        this.$store.commit("app/save", {
          key: "darkTheme",
          value
        });
      }
    }
  },
  methods: {
    pushPage(to) {
      this.$router.push(to);
    }
  }
};
</script>
