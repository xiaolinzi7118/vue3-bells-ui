<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo" />
  <Demo :component="Input2Demo" />
  <Demo :component="Input3Demo" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Input1Demo from "./Inputs/Input1.demo.vue";
import Input2Demo from "./Inputs/Input2.demo.vue";
import Input3Demo from "./Inputs/Input3.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Input1Demo, Input2Demo, Input3Demo };
  },
};
</script>
