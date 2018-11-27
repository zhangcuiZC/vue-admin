<template>
  <div>
    <div class="header">
      <Input v-model="search.name" placeholder="商户名称" style="width: 200px" />
      <Input v-model="search.account" placeholder="商户账号" style="width: 200px" />
      <Button type="primary" ghost>搜索</Button>
      <Button>清空</Button>
      <Button type="primary" class="newBtn" icon="md-add" to="/business/user/info/create">添加商户</Button>
    </div>
    <Table :columns="column" :data="dataSrc"></Table>
  </div>
</template>
<style lang="less" scoped>
.header {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.header > * {
  float: left;
  margin-right: 10px;
}
.newBtn {
  float: right;
  margin: 0;
}
</style>

<script>
import { Input, Button, Table } from "iview";
export default {
  name: "UserList",
  components: { Input, Button, Table },
  data() {
    return {
      newModal: false,
      search: {
        name: "",
        account: ""
      },
      column: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      dataSrc: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  computed: {},
  created() {
    // this.$store.dispatch({
    //   type: "glance/getList",
    //   payload: {
    //     page: 1,
    //     pagesize: 10,
    //     obu: 1,
    //     status: 9
    //   }
    // });
  }
};
</script>

