<template>
  <div id="app">
    <AmazonEBS />
  </div>
</template>

<script>
import AmazonEBS from "./components/AmazonEBS.vue";

export default {
  name: "App",
  components: {
    AmazonEBS
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
