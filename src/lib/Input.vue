<template>
  <div class="linzi-input">
    <input
      class="linzi-input__inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="inputText"
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    text: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const inputText = (e) => {
      // context.emit("update:text", e.target.value);
      console.log(e.target.value);
    };
    return { inputText };
  },
};
</script>
<style lang="scss" scoped>
.linzi-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .linzi-input__inner {
    display: inline-block;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #add8e6;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>