<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <validation-provider name="用户名" rules="required|email">
              <div slot-scope="{errors}">
                <input
                  type="text"
                  name="name"
                  v-model="name"
                  placeholder="请输入用户名"
                  autocomplete="off"
                  class="layui-input"
                />
                <div class="error layui-form-mid">{{errors[0]}}</div>
              </div>
            </validation-provider>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              v-model="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input
              style="float:left;"
              type="text"
              name="title"
              v-model="code"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            />
            <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha"></div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo" @click="checkForm">登录</button>
            <button type="reset" class="layui-btn layui-btn-primary">忘记密码</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ValidationProvider, extend } from "vee-validate";
// 导入部分规则
// import { required, email } from "vee-validate/dist/rules";
// 导入全部规则
import * as rules from "vee-validate/dist/rules";
import zh from "vee-validate/dist/locale/zh_CN";

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule],
  });
}

// extend("required", {
//   ...required,
//   message: zh.message[rule],
// });
// extend("email", email);
export default {
  name: "app",
  data() {
    return {
      svg: "",
      name: "",
      password: "",
      code: "",
      errorMsg: [],
    };
  },
  components: {
    ValidationProvider,
  },
  methods: {
    getCaptcha() {
      // 跨域的两种方法，一种是koa使用koa-cors，还有一种是在vue.config.js中给devserver设置代理
      axios.get("http://localhost:3001/GetCaptcha").then((res) => {
        // console.log(res);
        if (res.status === 200) {
          let obj = res.data;
          if (obj.code === 200) {
            this.svg = obj.msg;
          }
        }
      });
    },
    checkForm() {
      this.errorMsg = [];
      if (!this.name) {
        this.errorMsg.push("登录名为空");
      }
      if (!this.password) {
        this.errorMsg.push("密码为空");
      }
      if (!this.code) {
        this.errorMsg.push("验证码为空");
      }
    },
  },
  mounted() {
    this.getCaptcha();
  },
};
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.svg {
  position: relative;
  top: -15px;
}
.error {
  color: red;
}
</style>
