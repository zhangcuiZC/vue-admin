<template>
  <transition name="nf">
    <div class="notFound">
      <p class="title">404 Not Found</p>
      <a @click="gotoHome">返回首页</a>
    </div>
  </transition>
</template>
<style lang="less">
.notFound {
  width: 100vw;
  height: 100vh;
  padding-bottom: 15vh;
  position: absolute;
  left: 0;
  top: 0;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 30px;
    font-weight: bold;
  }
}
.nf-enter-active,
.nf-leave-active {
  transition: transform 0.4s;
}
.nf-enter,
.nf-leave-to {
  transform: translateY(-100vh);
}
</style>

<script>
export default {
  name: "NotFound",
  methods: {
    gotoHome: function() {
      this.$router.replace({ path: "/" });
    }
  }
};
</script>
