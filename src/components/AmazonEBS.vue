<template>
  <div class="flex flex-wrap items-stretch">
    <div class="w-1/2">
      <h1 class="font-mono p-6 text-gray-700">Amazon EBS Builder</h1>
      <form class="px-6" v-on:submit.prevent>
        <label class="block mt-4">
          <span class="text-gray-700">Description</span>
          <input
            autofocus
            class="block form-input mt-1 w-full"
            placeholder="The description to set for the resulting AMI"
            v-model="ami_description"
            type="text"
          />
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Name</span>
          <input
            class="block form-input mt-1 w-full"
            placeholder="The name of the resulting AMI"
            v-model="ami_name"
            type="text"
          />
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Region</span>
          <select class="block form-select mt-1 w-full" v-model="region">
            <option disabled value="">Region</option>
            <option>us-east-1</option>
          </select>
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Virtualization Type</span>
          <select
            class="block form-select mt-1 w-full"
            v-model="ami_virtualization_type"
          >
            <option disabled value="">Virtualization Type</option>
            <option>paravirtual</option>
            <option>hvm</option>
          </select>
        </label>
        <div class="flex flex-wrap items-center mt-6">
          <div class="block flex-grow">
            <button
              class="shadow bg-blue-500 border border-blue-500 focus:outline-none hover:bg-blue-600 hover:border-blue-600 mb-4 mr-4 px-4 py-2 rounded text-white"
              v-on:click="generate"
            >
              <span class="block flex items-center">
                Generate
                <svg
                  class="fill-current h-3 ml-2 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="shadow border border-transparent focus:outline-none hover:bg-gray-200 mb-4 mr-4 px-4 py-2 rounded"
              v-on:click="copy"
            >
              <span class="block flex items-center">
                Copy
                <svg
                  class="fill-current h-3 ml-2 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <button
            class="shadow border border-transparent focus:outline-none hover:bg-gray-200 mb-4 px-4 py-2 rounded"
            v-on:click="clear"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
    <div class="bg-gray-100 p-6 text-gray-700 w-1/2">
      <h1 class="font-mono mb-8 select-none">template.json</h1>
      <!-- eslint-disable-next-line -->
      <div class="font-mono text-gray-700 whitespace-pre-wrap" id="template">{{ templateJson }}</div>
      <notifications
        classes="alert"
        group="copy"
        :max="1"
        position="bottom right"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    templateJson: function() {
      return JSON.stringify(this.template, null, "  ");
    }
  },
  data: function() {
    return {
      // AMI Configuration
      ami_description: "",
      ami_name: "",
      ami_virtualization_type: "paravirtual",
      region: "us-east-1",
      template: {
        _comment:
          "Template created using Punk: https://github.com/jasonwalsh/punk",
        builders: []
      }
    };
  },
  methods: {
    clear: function() {
      this.template = {
        _comment:
          "Template created using Punk: https://github.com/jasonwalsh/punk",
        builders: []
      };
    },
    copy: function() {
      // Copies the text in the div container to the clipboard.
      let template = document.getElementById("template");
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(template);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeRange(range);
      this.$notify({
        group: "copy",
        text: "Template copied to clipboard!"
      });
    },
    generate: function() {
      // Remove the first element from the builders list to prevent appending.
      this.template.builders.pop();
      let builder = {};
      builder.ami_description = this.ami_description;
      builder.ami_name = this.ami_name;
      builder.ami_virtualization_type = this.ami_virtualization_type;
      builder.region = this.region;
      builder.type = "amazon-ebs";
      this.template.builders.push(builder);
    }
  }
};
</script>
