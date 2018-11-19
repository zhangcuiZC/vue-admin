<template>
  <transition name="main">
    <div class="main">
      <MainHeader :root="currentRouter.root" />
      <div class="layout">
        <MainSider :currentRouter="currentRouter" />
        <Layout class="rightLayout">
          <Header class="contentHeader">
            <span class="title">{{breadList[breadList.length-1].title}}</span>
            <Breadcrumb class="bread">
              <BreadcrumbItem 
                v-for="item in breadList" 
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
@import "../theme/constant.less";
.layout {
  height: 100vh;
  padding-top: 70px;
  width: 100%;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: stretch;
  min-width: 900px;
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
  // overflow-x: hidden;
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
import MainHeader from "../components/MainHeader.vue";
import MainSider from "../components/MainSider.vue";
import getCurrentRoutes from "../utils/getCurrentRoutes.js";

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
    currentRouter() {
      const currentRouter = {
        root: this.breadList[0] && this.breadList[0].name,
        parent: this.breadList[1] && this.breadList[1].name,
        child: this.breadList[2] && this.breadList[2].name
      };
      return currentRouter;
    },
    breadList() {
      return getCurrentRoutes(this.$route.path);
    }
  }
};
</script>