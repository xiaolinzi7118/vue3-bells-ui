<template>
  <h1>Toast 示例</h1>
  <Demo :component="Toast1Demo" />
  <Demo :component="Toast2Demo" />
  <Demo :component="Toast3Demo" />
  <Attributes :data="data" />
  <FooterNav :lastPage="{ route: '/doc/tabs', content: 'Tabs 标签页' }">
  </FooterNav>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Toast1Demo from "./Toasts/Toast1.demo.vue";
import Toast2Demo from "./Toasts/Toast2.demo.vue";
import Toast3Demo from "./Toasts/Toast3.demo.vue";
import { ref } from "vue";
import Attributes from "./Attributes.vue";
import FooterNav from "./FooterNav.vue";
export default {
  components: { Demo, Attributes, FooterNav },
  setup() {
    const data = ref([
      {
        params: "text",
        desc: "按钮文本内容",
        type: "String",
        select: "——",
        default: "点击提示",
      },
      {
        params: "value",
        desc: "提示文本内容",
        type: "String",
        select: "——",
        default: "轻提示",
      },
      {
        params: "position",
        desc: "提示出现位置",
        type: "String",
        select: "top | middle | bottom",
        default: "middle",
      },
      {
        params: "time",
        desc: "提示停留时间",
        type: "String",
        select: "——",
        default: "1500",
      },
    ]);
    return { Toast1Demo, Toast2Demo, Toast3Demo, data };
  },
};
</script>