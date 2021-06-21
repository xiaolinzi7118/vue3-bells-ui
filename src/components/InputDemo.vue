<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo" />
  <Demo :component="Input2Demo" />
  <Demo :component="Input3Demo" />
  <Attributes :data="data" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Input1Demo from "./Inputs/Input1.demo.vue";
import Input2Demo from "./Inputs/Input2.demo.vue";
import Input3Demo from "./Inputs/Input3.demo.vue";
import { ref } from "vue";
import Attributes from "./Attributes.vue";
export default {
  components: { Demo, Attributes },
  setup() {
    const data = ref([
      {
        params: "type",
        desc: "类型",
        type: "String",
        select: "text | password",
        default: "text",
      },
      {
        params: "placeholder",
        desc: "输入框占位文本",
        type: "String",
        select: "——",
        default: "请输入内容",
      },
      {
        params: "text",
        desc: "输入框内容",
        type: "String",
        select: "——",
        default: "——",
      },
      {
        params: "disabled",
        desc: "是否禁用",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
      {
        params: "eyes",
        desc: "点击显示密码文本",
        type: "Boolean",
        select: "true | false",
        default: "false",
      },
    ]);
    return { Input1Demo, Input2Demo, Input3Demo, data };
  },
};
</script>
