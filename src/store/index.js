import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import userInfo from "./modules/business/userInfo";
import channel from "./modules/business/channel";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    app,
    userInfo,
    channel
  },
  strict: debug
});
