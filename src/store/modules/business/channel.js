import CheckService from "@/services/business/check";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    addLoading: false
  },
  mutations: {
    save(state, { key, value }) {
      state[key] = value;
    }
  },
  actions: {
    async addChannel({ commit }, { payload }) {
      commit("save", { key: "addLoading", value: true });
      const { data } = await CheckService.addChannel(payload);
      console.log(data);
      if (data.status === "0") {
        Vue.prototype.$Message.success("添加通道成功");
      }
      commit("save", { key: "addLoading", value: false });
    }
  }
};
