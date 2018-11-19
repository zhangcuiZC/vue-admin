import axios from "axios";
import Vue from "vue";
import router from "@/router";
import { delCookie } from "../utils/cookie";

const isProd = process.env.NODE_ENV === "production";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  Vue.prototype.$Loading.start();
  return config;
});
axios.interceptors.response.use(
  response => {
    const { data } = response;
    if (data.status === "-2") {
      Vue.prototype.$Message.error(`无效的登录信息或登录已失效，请重新登录`);
      delCookie("userName");
      window.history.replaceState(null, "", "/login");
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
    return response;
  },
  err => {
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
        url: isProd
          ? "/echeck-admin-boss" + url
          : "/echeck-admin-boss/api" + url,
        [key]: data
      });
    };
  });
  return serviceMap;
};

export default withAxios;
