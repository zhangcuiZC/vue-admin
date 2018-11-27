<template>
  <ChannelForm @submit="handleSubmit" />
</template>
<script>
import ChannelForm from "@/components/Business/ChannelForm";
export default {
  name: "ChannelCreate",
  components: { ChannelForm },
  methods: {
    handleSubmit(data) {
      this.$store.dispatch({
        type: "channel/addChannel",
        payload: data
      });
    }
  }
};
</script>