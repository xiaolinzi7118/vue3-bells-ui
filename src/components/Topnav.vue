<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-lingdang"></use>
        </svg>
      </router-link>
    </div>
    <div class="menu">
      <li>
        <router-link to="/doc"> 文档 </router-link>
      </li>
    </div>
    <span v-if="isVisible" class="toggleAside" @click="ToggleAside">
      <svg class="icon">
        <use xlink:href="#icon-mulu"></use>
      </svg>
    </span>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const ToggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { ToggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 10px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > a > svg {
      width: 3em;
      height: 3em;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > .icon {
      width: 2em;
      height: 2em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>