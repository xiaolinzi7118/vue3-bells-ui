<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Attributes :data="data" />
  <FooterNav
    :lastPage="{ route: '/doc/dialog', content: 'Dialog 弹出框' }"
    :nextPage="{ route: '/doc/toast', content: 'Toast 轻提示' }"
  >
  </FooterNav>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs/Tabs1.demo.vue";
import { ref } from "vue";
import Attributes from "./Attributes.vue";
import FooterNav from "./FooterNav.vue";
export default {
  components: {
    Demo,
    Attributes,
    FooterNav,
  },
  setup() {
    const data = ref([
      {
        params: "selected",
        desc: "选中的tab页",
        type: "Boolean",
        select: "——",
        default: "——",
      },
      {
        params: "tab-item",
        desc: "tab页",
        type: "component",
        select: "——",
        default: "——",
      },
    ]);
    return {
      Tabs1Demo,
      data,
    };
  },
};
</script>