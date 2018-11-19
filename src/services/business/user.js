import withAxios from "../../utils/withAxios";

const apiConfig = [
  {
    name: "addUser",
    url: "/userInfo/addUser",
    method: "post"
  }
];

export default withAxios(apiConfig);
