import axios from "axios";
import Vue from "vue";
import router from "@/router";
import { delCookie } from "../utils/cookie";
import store from "../store/index";

const isProd = process.env.NODE_ENV === "production";

axios.defaults.baseURL = isProd
  ? "/echeck-admin-boss"
  : "/echeck-admin-boss/api";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  store.commit("app/save", {
    key: "loading",
    value: { ...store.state.app.loading, [config.requestName]: true }
  });
  Vue.prototype.$Loading.start();
  return config;
});
axios.interceptors.response.use(
  response => {
    const { data } = response;
    if (data.status === "-2") {
      Vue.prototype.$Message.error(`无效的登录信息或登录已失效，请重新登录`);
      delCookie("userName");
      router.push({ path: "/login" });
    }
    if (data.status === "-1") {
      Vue.prototype.$Message.error(`FAILED [${data.errMsg}]`);
    }
    if (data.status === "0") {
      Vue.prototype.$Loading.finish();
    } else {
      Vue.prototype.$Loading.error();
    }
    store.commit("app/save", {
      key: "loading",
      value: {
        ...store.state.app.loading,
        [response.config.requestName]: false
      }
    });
    return response;
  },
  err => {
    store.commit("app/save", {
      key: "loading",
      value: {
        ...store.state.app.loading,
        [err.response.config.requestName]: false
      }
    });
    Vue.prototype.$Message.error(`ERROR [${err.response.status}]`);
    Vue.prototype.$Loading.error();
    return Promise.resolve({ data: {} });
  }
);

const withAxios = apiConfig => {
  const serviceMap = {};
  apiConfig.map(({ name, url, method }) => {
    serviceMap[name] = async function(data = {}) {
      let key = "params";
      if (method === "post" || method === "put") {
        key = "data";
      }
      return axios({
        method,
        url,
        [key]: data,
        requestName: name
      });
    };
  });
  return serviceMap;
};

export default withAxios;
