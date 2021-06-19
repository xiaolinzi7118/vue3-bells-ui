<template>
  <div>
    <div class="all-wrapper">
      <Topnav />
      <div class="banner">
        <h1>林子UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style scoped lang='scss'>
.all-wrapper {
  background: rgb(52, 244, 252);
  background: linear-gradient(
    90deg,
    rgba(52, 244, 252, 1) 0%,
    rgba(207, 99, 247, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
