<template>
  <div class="linzi-attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
        <tr>
          <th
            class="linzi-attr-title"
            v-for="(item, index) in columns"
            :key="index"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item">
          <td
            class="linzi-attr-title td"
            v-for="(value, key) in item"
            :key="key"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { columns } from "../lib/AttrColumn";
export default {
  props: {
    data: {
      type: Object,
    },
  },
  setup() {
    return { columns };
  },
};
</script>

<style lang="scss" scoped>
.linzi-attr {
  width: 100%;
  overflow-x: auto;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  .attr-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .linzi-attr-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 600;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .td {
    color: #606266;
    font-size: 14px;
  }
}
</style>