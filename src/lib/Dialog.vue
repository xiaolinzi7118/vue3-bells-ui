<template>
  <div></div>
  <div>
    <header>标题</header>
    <main>第一行字</main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>
