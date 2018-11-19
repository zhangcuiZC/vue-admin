import withAxios from "../utils/withAxios";

const apiConfig = [
  {
    name: "login",
    url: "/system/checkAccount",
    method: "get"
  },
  {
    name: "logout",
    url: "/system/quit",
    method: "get"
  }
];

export default withAxios(apiConfig);
