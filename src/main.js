// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "iview/dist/styles/iview.css";
import "./theme/index.less";
import { Message, LoadingBar } from "iview";

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
