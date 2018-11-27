<template>
  <transition name="main">
    <div class="main">
      <MainHeader :root="currentRoutes.root" />
      <div class="layout">
        <MainSider :currentRoutes="currentRoutes" />
        <Layout class="rightLayout">
          <Header class="contentHeader">
            <span class="title">{{routesList[routesList.length-1].title}}</span>
            <Breadcrumb class="bread">
              <BreadcrumbItem 
                v-for="item in routesList" 
                :key="item.name"
                :to="item.to"
              >
                <Icon v-if="item.icon" :type="item.icon"/>
                {{item.title}}
              </BreadcrumbItem>
            </Breadcrumb>
          </Header>
          <Content class="content">
            <router-view></router-view>
          </Content>
        </Layout>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import "../../theme/constant.less";
.layout {
  height: 100vh;
  padding-top: 70px;
  width: 100%;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: stretch;
  min-width: 1160px;
}
.rightLayout {
  overflow: auto;
  padding: 20px;
  background: #f0f2f5;
}
.contentHeader {
  background-color: #f0f2f5;
  padding: 0;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .title {
    font-size: 24px;
    margin-right: 20px;
    color: @color-black1;
  }
  margin-bottom: 20px;
}
.content {
  background-color: #fff;
  padding: 20px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
}
.main-enter-active,
.main-leave-active {
  transition: transform 0.4s;
}
.main-enter,
.main-leave-to {
  transform: translateY(100vh);
}
</style>


<script>
import { Layout, BreadcrumbItem, Breadcrumb, Card, Header, Icon } from "iview";
import MainHeader from "./Header";
import MainSider from "./Sider";
import getRoutesData from "@/utils/getRoutesData.js";

export default {
  name: "MainLayout",
  components: {
    MainHeader,
    MainSider,
    Header,
    Layout,
    BreadcrumbItem,
    Breadcrumb,
    Card,
    Icon
  },
  computed: {
    currentRoutes() {
      const currentRoutes = {
        root: this.routesList[0] && this.routesList[0].name,
        parent: this.routesList[1] && this.routesList[1].name,
        child: this.routesList[2] && this.routesList[2].name
      };
      return currentRoutes;
    },
    routesList() {
      return getRoutesData(this.$route.path);
    }
  }
};
</script>