<template>
  <span>
    <Button class="linzi-toast-text" @click="toastVisible">{{ text }}</Button>
    <div class="linzi-toast-inner" :class="position" v-if="visible">
      {{ value }}
    </div>
  </span>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    text: {
      type: String,
      default: "点击提示",
    },
    position: {
      type: String,
      default: "middle",
    },
    value: {
      type: String,
      default: "轻提示",
    },
    time: {
      type: String,
      default: "1500",
    },
  },
  setup(props) {
    const visible = ref(false);
    const toastVisible = () => {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, Number(props.time));
    };
    return { visible, toastVisible };
  },
};
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.linzi-toast-inner {
  z-index: 100;
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 500ms;
  &.top {
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    animation: slide-down $animation-duration;
  }
  &.bottom {
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: slide-up $animation-duration;
  }
  &.middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: fade-in $animation-duration;
  }
}
</style>