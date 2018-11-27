<template>
  <UserForm @submit="handleSubmit" :loading="loading" />
</template>
<script>
import UserForm from "@/components/Business/UserForm";
export default {
  name: "UserCreate",
  components: { UserForm },
  computed: {
    loading() {
      return this.$store.state.app.loading.addUser;
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