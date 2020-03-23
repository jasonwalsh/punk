<template>
  <div class="container min-w-full" id="app">
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
