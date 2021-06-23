<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Attributes :data="data" />
  </div>
  <FooterNav
    :lastPage="{ route: '/doc/get-started', content: '开始使用' }"
    :nextPage="{ route: '/doc/button', content: 'Button 按钮' }"
  >
  </FooterNav>
</template>

<script lang="ts">
import Switch1Demo from "./Switchs/Switch1.demo.vue";
import Switch2Demo from "./Switchs/Switch2.demo.vue";
import Demo from "./Demo.vue";
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
        params: "value",
        desc: "是否选中",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
      {
        params: "disabled",
        desc: "是否禁用",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
    ]);
    return {
      Switch1Demo,
      Switch2Demo,
      data,
    };
  },
};
</script>