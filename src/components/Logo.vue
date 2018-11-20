<template>
  <div class="logo">
    <Icon class="logoIcon" type="md-cube"></Icon>
    <div class="logoBox">
      <p class="logoTitle">Vue-iView管理后台</p>
      <p class="logoText">Vue-iView Admin Platform</p>
    </div>
  </div>
</template>
<style lang="less">
@import "../theme/constant.less";
.logo {
  width: 200px;
  height: 100%;
  position: relative;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: @color-black1;
  transition: all 0.2s ease-in-out;
  .logoIcon {
    font-size: 40px;
    margin-right: 10px;
  }
  .logoBox {
    font-size: 12px;
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    .logoTitle {
      font-size: 14px;
    }
    .logoText {
      display: inline-block;
      font-weight: lighter;
    }
  }
}
</style>
<script>
import { Icon } from "iview";
export default {
  name: "Logo",
  components: { Icon }
};
</script>

