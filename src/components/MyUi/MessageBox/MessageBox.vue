<template>
  <div :class="['message-box', type]">
    <div class="inner">
      <header class="header">
        <h1 class="title">{{ title }}</h1>
        <span @click="$messageBox.hideMessageBox()">x</span>
      </header>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    title: {
      type: String,
      default: "this is title",
    },
    content: {
      type: String,
      default: "this is content",
    },
    type: {
      type: String,
      default: "danger",
      validator(value) {
        return ["primary", "warn", "danger", "success"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
@import "./index.scss";
</style>