<template>
  <h1>Toast 示例</h1>
  <Demo :component="Toast1Demo" />
  <Demo :component="Toast2Demo" />
  <Demo :component="Toast3Demo" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Toast1Demo from "./Toasts/Toast1.demo.vue";
import Toast2Demo from "./Toasts/Toast2.demo.vue";
import Toast3Demo from "./Toasts/Toast3.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Toast1Demo, Toast2Demo, Toast3Demo };
  },
};
</script>