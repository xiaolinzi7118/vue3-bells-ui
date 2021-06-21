<template>
  <article class="markdown-body" v-html="content" />
</template>
<script lang='ts'>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>