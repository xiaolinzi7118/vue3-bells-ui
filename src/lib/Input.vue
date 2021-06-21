<template>
  <div class="linzi-input">
    <input
      class="linzi-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="inputText"
    />
    <span v-if="eyes" class="linzi-input_eyes" @click="changeType">
      <svg class="icon">
        <use xlink:href="#icon-kejian"></use>
      </svg>
    </span>
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
    eyes: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const inputText = (e) => {
      context.emit("update:text", e.target.value);
    };
    const changeType = () => {
      if (props.type === "password") {
        context.emit("update:type", "text");
      } else {
        context.emit("update:type", "password");
      }
    };
    return { inputText, changeType };
  },
};
</script>
<style lang="scss" scoped>
.linzi-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .linzi-input_inner {
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
  .linzi-input_eyes {
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
    > svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>