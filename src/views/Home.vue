<template>
  <div class="wrapper">
    <div class="all-wrapper">
      <Topnav />
      <div class="banner">
        <h1>铃铛 UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/xiaolinzi7118/vue3-bells-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
      <div class="introduce">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-Vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript</h3>
            <p>源代码采用 TypeScript 书写</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
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
.banner {
  padding-top: 100px;
  @media (min-width: 800px) {
    padding-top: 200px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #414b5b;
      color: white;
      display: inline-block;
      border-radius: 28px;
      padding: 8px 24px;
      &:hover {
        background: white;
        color: #414b5b;
        text-decoration: none;
      }
    }
  }
}
.introduce {
  margin: 64px auto;
  @media (min-width: 800px) {
    margin: 120px auto;
    width: 800px;
  }
  @media (min-width: 1200px) {
    margin: 120px auto;
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      border-radius: 16px;
      width: 360px;
      margin: 16px 5px 0 35px;
      padding: 4px 10px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
