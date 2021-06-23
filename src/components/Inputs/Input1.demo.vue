<demo>
基础用法+双向绑定内容
</demo>

<template>
  <Input placeholder="请输入内容" v-model:text="text" />
  <div>输入内容为：{{ text }}</div>
</template>

<script lang="ts">
import { Input } from "../../lib/index";
import { ref } from "vue";
export default {
  components: { Input },
  setup() {
    const text = ref("");
    return { text };
  },
};
</script>



