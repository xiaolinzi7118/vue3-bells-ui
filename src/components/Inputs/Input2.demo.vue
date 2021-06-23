<demo>
支持类型+密码框切换显示隐藏
</demo>

<template>
  <div class="wrapper">
    <Input placeholder="请输入内容" />
    <Input placeholder="请输入内容" type="password" class="input1" />
    <Input placeholder="请输入内容" v-model:type="type" eyes />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Input } from "../../lib/index";
export default {
  components: { Input },
  setup() {
    const type = ref("password");
    return { type };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  > div {
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
</style>
