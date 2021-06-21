<demo>
支持弹出时间
</demo>

<template>
  <div class="wrapper">
    <Toast time="1500" />
    <Toast time="3000" />
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