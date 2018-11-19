<template>
  <ChannelInfo @submit="handleSubmit" />
</template>
<script>
import ChannelInfo from "../../../components/Business/ChannelInfo";
export default {
  name: "NewChannel",
  components: { ChannelInfo },
  methods: {
    handleSubmit(info) {
      return console.log(info);
      for (let key in info) {
        info["userResponseDTO." + key] = info[key];
        delete info[key];
      }
      this.$store.dispatch({
        type: "userInfo/addUser",
        payload: info
      });
    }
  }
};
</script>