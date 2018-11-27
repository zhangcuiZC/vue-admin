<template>
  <div class="userInfoPage">
    <Form :label-width="120" :model="info" :rules="infoRules" ref="userInfoForm">
      <FormItem label="商户名称">
        <Input type="text" v-model="info.name"/>
      </FormItem>
      <FormItem label="商户账号" prop="userName">
        <Input type="text" v-model="info.userName" :disabled="info.id ? true : false"/>
      </FormItem>
      <FormItem label="手机账号" prop="telPhone">
        <Input type="text" v-model="info.telPhone" :disabled="info.id ? true : false"/>
      </FormItem>
      <FormItem label="联系人">
        <Input type="text" v-model="info.contactsName"/>
      </FormItem>
      <FormItem label="联系电话">
        <Input type="text" v-model="info.contactsPhone"/>
      </FormItem>
      <FormItem label="开通状态" prop="status">
        <Select v-model="info.status" placeholder="请选择开通状态">
          <Option value="0" key="0">冻结</Option>
          <Option value="1" key="1">开通</Option>
        </Select>
      </FormItem>
      <FormItem label="版本" prop="version">
        <Select v-model="info.version" placeholder="请选择版本">
          <Option value="ON_TRIAL" key="ON_TRIAL">试用版</Option>
          <Option value="SYSTEM" key="SYSTEM">系统版</Option>
          <Option value="PLATFORM" key="PLATFORM">平台版</Option>
        </Select>
      </FormItem>
      <FormItem label="有效期至" prop="expireTime">
        <DatePicker
          type="datetime"
          placeholder="请选择有效期"
          style="width: 100%;"
          v-model="info.expireTime"
        />
      </FormItem>
      <FormItem label="密码" :prop="this.info.id ? '' : 'password'">
        <Input type="password" v-model="info.password"/>
      </FormItem>
      <FormItem label="确认密码" prop="confirmPassword">
        <Input type="password" v-model="info.confirmPassword"/>
      </FormItem>
      <FormItem label>
        <Button
          type="primary"
          style="margin-right: 30px;"
          @click="onSubmit"
          :loading="loading"
        >确认{{info.id ? "修改" : "添加"}}</Button>
        <Button @click="goBack">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>
<style lang="less" scoped>
.userInfoPage {
  width: 460px;
  padding: 20px 0;
}
</style>
<script>
import {
  Form,
  FormItem,
  Button,
  Input,
  DatePicker,
  Select,
  Option
} from "iview";

export default {
  name: "UserForm",
  components: { Form, FormItem, Button, Input, DatePicker, Select, Option },
  props: {
    userInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const confirmPasswordValidator = (rule, value, callback) => {
      if (!value && !this.info.password) {
        callback();
      } else if (value !== this.info.password) {
        callback(new Error("密码输入不一致"));
      } else {
        callback();
      }
    };
    const telPhoneValidator = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机账号"));
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error("请输入合法的手机号码"));
      } else {
        callback();
      }
    };
    return {
      info: {
        id: this.userInfo.id,
        userName: this.userInfo.userName,
        name: this.userInfo.name,
        telPhone: this.userInfo.telPhone,
        contactsPhone: this.userInfo.contactsPhone,
        contactsName: this.userInfo.contactsName,
        status: this.userInfo.status,
        version: this.userInfo.version,
        expireTime: this.userInfo.expireTime,
        password: "",
        confirmPassword: ""
      },
      infoRules: {
        userName: [{ required: true, message: "商户账号不可为空" }],
        telPhone: [
          { required: true, validator: telPhoneValidator, trigger: "blur" }
        ],
        status: [{ required: true, message: "请选择开通状态" }],
        version: [{ required: true, message: "请选择版本" }],
        expireTime: [{ required: true, message: "请选择到期时间" }],
        password: [{ required: true, message: "密码不可为空" }],
        confirmPassword: [
          { required: !this.userInfo.id, validator: confirmPasswordValidator }
        ]
      }
    };
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    onSubmit() {
      this.$refs.userInfoForm.validate(isValid => {
        if (isValid) {
          const info = { ...this.info };
          delete info.confirmPassword;
          this.$emit("submit", info);
        }
      });
    }
  }
};
</script>


