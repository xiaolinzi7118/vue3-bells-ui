<demo>
支持弹出位置
</demo>

<template>
  <div class="wrapper">
    <Toast text="从上方弹出" value="轻提示" position="top" />
    <Toast text="从中间弹出" value="轻提示" position="middle" />
    <Toast text="从下方弹出" value="轻提示" position="bottom" />
  </div>
</template>
<script lang="ts">
import Toast from "../../lib/Toast.vue";
export default {
  components: {
    Toast,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  > span {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>