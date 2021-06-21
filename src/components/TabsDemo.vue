<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Attributes :data="data" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs/Tabs1.demo.vue";
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
        params: "selected",
        desc: "选中的tab页",
        type: "Boolean",
        select: "——",
        default: "——",
      },
      {
        params: "tab-item",
        desc: "tab页",
        type: "component",
        select: "——",
        default: "——",
      },
    ]);
    return {
      Tabs1Demo,
      data,
    };
  },
};
</script>