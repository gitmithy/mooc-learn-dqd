<template>
  <div>
    <h1>这里是用户画像</h1>
    <ul>
      <li v-for="(item, index) in items" :key="'list' + index">
        <p>姓名：{{ item.name }}</p>
        <p>城市：{{ item.city }}</p>
        <p>头像：{{ item.image }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios
      .get("http://your.domain.com/test")
      .then(res => (this.items = res.data.users));
  }
};
</script>

<style lang="scss" scoped>
</style>
