<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Attributes :data="data" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialogs/Dialog1.demo.vue";
import Dialog2Demo from "./Dialogs/Dialog2.demo.vue";
import { ref } from "vue";
import Attributes from "./Attributes.vue";
export default {
  components: {
    Demo,
    Attributes,
  },
  setup() {
    const data = ref([
      {
        params: "visible",
        desc: "是否展示",
        type: "boolean",
        select: "true | false",
        default: "false",
      },
      {
        params: "closeOnClickOverlay",
        desc: "是否点击遮罩层关闭弹出框",
        type: "boolean",
        select: "true | false",
        default: "false",
      },
      {
        params: "ok",
        desc: "确认触发函数",
        type: "function",
        select: "()=>{}",
        default: "--",
      },
      {
        params: "cancel",
        desc: "取消触发函数",
        type: "function",
        select: "()=>{}",
        default: "--",
      },
      {
        params: "v-slot:title",
        desc: "对话框标题插槽",
        type: "——",
        select: "——",
        default: "——",
      },
      {
        params: "v-slot:content",
        desc: "对话框内容插槽",
        type: "——",
        select: "——",
        default: "——",
      },
    ]);
    return {
      Dialog1Demo,
      Dialog2Demo,
      data,
    };
  },
};
</script>