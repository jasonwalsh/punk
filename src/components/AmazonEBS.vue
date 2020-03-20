<template>
  <form v-on:submit.prevent>
    <input v-model="ami_name" type="text" />
    <button v-on:click="generate">Generate</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      ami_name: "",
      template: {
        builders: []
      }
    };
  },
  methods: {
    generate: function(event) {
      console.log(event);
      let builder = {
        type: "amazon-ebs"
      };
      builder.ami_name = this.ami_name;
      this.template.builders.push(builder);
      console.log(this.template);
    }
  }
};
</script>
