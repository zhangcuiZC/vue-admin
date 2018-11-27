import UserService from "@/services/business/user";
import Vue from "vue";

export default {
  namespaced: true,
  state: {},
  mutations: {
    save(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    async addUser({ commit }, { payload }) {
      const { data } = await UserService.addUser(payload);
      if (data.status === "0") {
        Vue.prototype.$Message.success("添加用户成功");
      }
    }
  }
};
