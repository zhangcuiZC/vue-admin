<template>
  <transition name="login">
    <div class="login">
      <div class="loginOuter">
        <div class="logoOuter">
          <Logo class="loginLogo" />
          <p class="plz">请登录</p>
        </div>
        <div class="loginInner">
          <Form 
            ref="loginForm" 
            :model="loginFields" 
            :rules="loginRules" 
            class="loginForm"
          >
            <FormItem prop="username">
              <Input 
                type="text" 
                v-model="loginFields.username" 
                placeholder="账号"
              >
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input 
                type="password" 
                v-model="loginFields.password" 
                placeholder="密码" 
                @on-enter="handleSubmit('loginForm')"
              >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <Button 
              :loading="loading" 
              type="primary" 
              @click="handleSubmit('loginForm')"
            >
              登 录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="less">
.login {
  width: 100vw;
  height: 100vh;
  padding-bottom: 10vh;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/login.png") no-repeat center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loginOuter {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 360px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    .loginLogo {
      color: #fff;
    }
    .loginForm {
      padding: 20px 0;
    }
    .logoOuter {
      height: 70px;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .plz {
        font-size: 36px;
        padding-right: 20px;
        font-weight: lighter;
      }
    }
    .loginInner {
      padding: 20px;
      button {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
.login-enter-active,
.login-leave-active {
  transition: transform 0.4s;
}
.login-enter,
.login-leave-to {
  transform: translateY(-100vh);
}
</style>
<script>
import { Form, FormItem, Input, Icon, Button } from "iview";
import Logo from "../../components/Logo";
export default {
  name: "Login",
  components: { Form, FormItem, Input, Icon, Button, Logo },
  data() {
    return {
      loginFields: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 5,
            message: "密码应不少于5位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    loading() {
      return this.$store.state.app.loading.login;
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$store.dispatch({
            type: "app/login",
            payload: { ...this.loginFields }
          });
        }
      });
    }
  }
};
</script>

