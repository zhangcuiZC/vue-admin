import withAxios from "../../utils/withAxios";

const apiConfig = [
  {
    name: "addChannel",
    url: "/channelInfo/addChannel",
    method: "post"
  }
];

export default withAxios(apiConfig);
