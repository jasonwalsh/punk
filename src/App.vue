<template>
  <div class="container max-w-xl mx-auto p-10" id="app">
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
