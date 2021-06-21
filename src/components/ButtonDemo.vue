<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Buttons/Button1.demo.vue";
import Button2Demo from "./Buttons/Button2.demo.vue";
import Button3Demo from "./Buttons/Button3.demo.vue";
import Button4Demo from "./Buttons/Button4.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
    };
  },
};
</script>