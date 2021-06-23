<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Attributes :data="data" />
  </div>
  <FooterNav
    :lastPage="{ route: '/doc/switch', content: 'Switch 开关' }"
    :nextPage="{ route: '/doc/input', content: 'Input 输入框' }"
  >
  </FooterNav>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Buttons/Button1.demo.vue";
import Button2Demo from "./Buttons/Button2.demo.vue";
import Button3Demo from "./Buttons/Button3.demo.vue";
import Button4Demo from "./Buttons/Button4.demo.vue";
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
        params: "theme",
        desc: "选择主题样式",
        type: "String",
        select: "main | success | danger | link | text",
        default: "button",
      },
      {
        params: "size",
        desc: "大小尺寸",
        type: "String",
        select: "small | normal | big",
        default: "normal",
      },
      {
        params: "disabled",
        desc: "是否禁用",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
      {
        params: "Loading",
        desc: "加载中",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
    ]);
    return { data, Button1Demo, Button2Demo, Button3Demo, Button4Demo };
  },
};
</script>