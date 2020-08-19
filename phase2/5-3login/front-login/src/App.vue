<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入标题"
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
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
            <div class="layui-form-mid svg" v-html="svg"></div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo">登录</button>
            <button type="reset" class="layui-btn layui-btn-primary">忘记密码</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      svg: "",
    };
  },
  mounted() {
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
</style>
