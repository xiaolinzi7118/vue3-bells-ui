<template>
  <div class="layout">
    <Topnav class="nav" isVisible="true" />
    <div class="content">
      <aside :class="{ visible: asideVisible }">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/installed">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 轻提示</router-link>
          </li>
        </ol>
      </aside>
      <main @click="toggleAsideVisible">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import {
  inject,
  onMounted,
  onUnmounted,
  reactive,
  Ref,
  watchEffect,
} from "vue";
import { debounce } from "../utils/debounce";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const data = reactive({
      listenerPageWidthFn: () => {},
      pageWidth: document.documentElement.clientWidth,
    });
    const watchPageWidth = () => {
      const listenerPageWidth = debounce(() => {
        data.pageWidth = document.documentElement.clientWidth;
      }, 300);
      window.addEventListener("resize", listenerPageWidth);
      return listenerPageWidth;
    };
    const toggleAsideVisible = () => {
      if (data.pageWidth <= 500) {
        asideVisible.value = false;
      }
    };
    watchEffect(() => {
      if (data.pageWidth > 500) {
        asideVisible.value = true;
      }
    });
    onMounted(() => {
      data.listenerPageWidthFn = watchPageWidth();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", data.listenerPageWidthFn);
    });
    return {
      asideVisible,
      toggleAsideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  > .nav {
    flex-shrink: 0;
    background: rgb(194, 221, 232);
    background: linear-gradient(
      90deg,
      rgba(194, 221, 232, 1) 0%,
      rgba(242, 218, 213, 1) 100%
    );
  }
  > .content {
    background: rgb(194, 221, 232);
    background: linear-gradient(
      180deg,
      rgba(194, 221, 232, 1) 0%,
      rgba(242, 218, 213, 1) 100%
    );
    display: flex;
    flex-grow: 1;
    padding-top: 74px;
    padding-left: 156px;
    > aside {
      flex-shrink: 0;
      width: 150px;
      padding: 90px 0 90px 0;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 10;
      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }
      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
          }
          .router-link-active {
            background-color: white;
          }
        }
      }
    }
    > main {
      overflow: auto;
      flex-grow: 1;
      padding: 16px;
      background: rgba($color: #000, $alpha: 0.1);
    }
  }
}
@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;
      > aside {
        background: rgb(194, 221, 232);
        background: linear-gradient(
          180deg,
          rgba(194, 221, 232, 1) 0%,
          rgba(242, 218, 213, 1) 100%
        );
        transition: all 0.25s linear;
        transform: translateX(-200px);
        &.visible {
          transform: translateX(0px);
        }
      }
      > main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>