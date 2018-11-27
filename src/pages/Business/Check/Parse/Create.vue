<template>
  <ParseForm @submit="handleSubmit" />
</template>
<script>
import ParseForm from "@/components/Business/ParseForm";
export default {
  name: "ParseCreate",
  components: { ParseForm },
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