<template>
  <div class="container min-w-full" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl">Punk</span>
      </div>
    </nav>
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
