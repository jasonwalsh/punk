<template>
  <div class="container mx-auto" id="app">
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
