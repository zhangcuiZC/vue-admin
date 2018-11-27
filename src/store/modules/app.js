import AppService from "@/services/app";
import router from "@/router";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    collapsed:
      window.localStorage.getItem("collapsedSider") === "true" ? true : false,
    darkTheme:
      window.localStorage.getItem("darkTheme") === "true" ? true : false,
    loading: {}
  },
  mutations: {
    save(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    async login({ commit, dispatch }, { payload }) {
      return router.push({ path: "/" });
      const { data } = await AppService.login(payload);
      if (data.status === "0") {
        router.push({ path: "/" });
        Vue.prototype.$Message.success("登录成功");
      }
    },
    async logout() {
      const { data } = await AppService.logout();
      console.log(data);
    }
  }
};
