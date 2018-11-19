<template>
  <UserInfo @submit="handleSubmit" :loading="loading" />
</template>
<script>
import UserInfo from "../../../components/Business/UserInfo";
export default {
  name: "New",
  components: { UserInfo },
  computed: {
    loading() {
      return this.$store.state.userInfo.addLoading;
    }
  },
  methods: {
    handleSubmit(info) {
      // for (let key in info) {
      //   info["userResponseDTO." + key] = info[key];
      //   delete info[key];
      // }
      this.$store.dispatch({
        type: "userInfo/addUser",
        payload: info
      });
    }
  }
};
</script>