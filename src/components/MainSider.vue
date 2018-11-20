<template>
  <Sider class="sider" :class="{collapsedSider: collapsed}" v-if="siderMenuList" :value="collapsed" :collapsed-width="70" :collapsible="true" :hide-trigger="true">
    <Menu 
      :active-name="currentRouter.child" 
      :theme="darkTheme ? 'dark' : 'light'" 
      width="auto" 
      :open-names="[currentRouter.parent]" 
      class="siderMenu"
      v-if="!collapsed"
      key="menu"
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
    <Menu
      v-else
      class="siderMenu"
      width="70"
      :theme="darkTheme ? 'dark' : 'light'" 
      :active-name="currentRouter.parent" 
      key="collapsedMenu"
    >
      <li
        v-for="parent in siderMenuList" 
        :key="parent.name" 
      >
        <Dropdown
          placement="right-start"
        >
          <div
            class="collapsedItem"
            :class="{darkItem: darkTheme, active: currentRouter.parent === parent.name}"
          >
            <Icon :type="parent.icon"></Icon>
          </div>
          <DropdownMenu slot="list">
            <DropdownItem 
              v-for="child in parent.children"
              :key="child.name" 
              :name="child.name" 
              v-if="!child.hidden"
              :selected="currentRouter.child === child.name"
              @click.native="pushPage(child.to)" 
            >
              {{child.title}}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
      
    </Menu>

    <div class="theme" :class="darkTheme ? 'darkTheme' : ''">
      <template v-if="!collapsed">
        <span class="arrow" @click="toggleCollapsed(true)"><Icon type="md-arrow-back" /></span>
        <i-switch v-model="darkTheme">
          <span slot="open">暗</span>
          <span slot="close">明</span>
        </i-switch>
      </template>
      <template v-else>
        <span class="arrow" @click="toggleCollapsed(false)"><Icon type="md-arrow-forward" /></span>
      </template>
    </div>
  </Sider>
</template>

<style scoped lang="less">
.sider {
  background: #fff !important;
  overflow-x: hidden;
  position: relative;
  .siderMenu {
    font-size: 12px;
    height: 100%;
    padding-bottom: 40px;
    &:after {
      display: none;
    }
    /deep/ .ivu-menu-item {
      font-size: 12px;
      white-space: nowrap;
    }
    /deep/ .ivu-menu-submenu-title {
      white-space: nowrap;
      width: 200px;
    }
  }
}
.sider.collapsedSider {
  overflow-x: visible;
  .collapsedItem {
    position: relative;
    font-size: 18px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #464c5b;
    transition: all 0.2s ease-in-out;
    &.active:not(.darkItem) {
      color: #2d8cf0;
      background-color: #f0faff;
      &:after {
        content: "";
        display: block;
        width: 2px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        background: #2d8cf0;
      }
    }
    &.darkItem {
      color: #ccc;
      &.active {
        color: #fff;
        background: #2d8cf0;
      }
      &:hover {
        color: #fff;
      }
    }
  }

  /deep/ .ivu-dropdown {
    display: block;
  }
  /deep/ .ivu-select-dropdown {
    left: 90px !important;
  }
  .theme {
    font-size: 14px;
    .arrow {
      text-align: center;
    }
  }
}
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
  .arrow {
    display: block;
    width: 50px;
    height: 40px;
    line-height: 40px;
  }
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
import {
  Sider,
  Menu,
  Submenu,
  Icon,
  MenuItem,
  Switch,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "iview";
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
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem
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
    },
    collapsed() {
      return this.$store.state.app.collapsed;
    }
  },
  methods: {
    pushPage(to) {
      this.$router.push(to);
    },
    toggleCollapsed(collapsed) {
      window.localStorage.setItem("collapsedSider", collapsed);
      this.$store.commit("app/save", {
        key: "collapsed",
        value: collapsed
      });
    }
  }
};
</script>
