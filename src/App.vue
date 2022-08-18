<template>
  <div id="app">
    <button @click="openDropt($event)">SHOWPriamy</button>
    <button @click="openDropt($event)">SHOWDanger</button>
    <button @click="openDropt($event)">SHOWWarn</button>
    <button @click="openDropt($event)">SHOWSuccess</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // MessageBox,
  },
  methods: {
    openDropt(e) {
      switch (e.srcElement.innerText) {
        case "SHOWPriamy":
          this.$messageBox.info(
            {
              title: "App tititle",
              content: "这是一段内容",
            },
            () => {
              console.log("展示primary页面");
            }
          );
          break
        case "SHOWWarn":
          this.$messageBox.warn(
            {
              title: "App tititle",
              content: "这是一段内容",
            },
            () => {
              console.log("展示warn页面");
            }
          );
            break
        case "SHOWDanger":
          this.$messageBox.danger(
            {
              title: "App tititle",
              content: "这是一段内容",
            },
            () => {
              console.log("展示danger页面");
            }
          );
            break
        default:
          this.$messageBox.success(
            {
              title: "App tititle",
              content: "这是一段内容",
            },
            () => {
              console.log("展示success页面");
            }
          );
      }
    },
  },
};
</script>

<style>
</style>
