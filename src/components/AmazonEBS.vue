<template>
  <div class="flex">
    <div class="font-bold w-1/2">
      <h1 class="font-mono p-6 text-gray-700">Amazon EBS</h1>
      <form class="min-h-screen px-6" v-on:submit.prevent>
        <label class="block mt-4">
          <span class="text-gray-700">Description</span>
          <input
            autofocus
            class="block form-input mt-1 w-full"
            v-model="ami_description"
            type="text"
          />
        </label>
        <label class="block mt-4">
          <span class="text-gray-700">Name</span>
          <input
            class="block form-input mt-1 w-full"
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
        <div class="flex items-center mt-8">
          <div class="w-1/2">
            <button
              class="bg-blue-500 border border-blue-500 focus:outline-none font-medium hover:bg-blue-600 hover:border-blue-600 mr-4 px-4 py-2 rounded text-white"
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
                    d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"
                  />
                </svg>
              </span>
            </button>
            <button
              class="border border-black focus:outline-none font-medium mr-4 px-4 py-2 rounded"
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
          <div class="text-right w-1/2">
            <button
              class="border border-transparent focus:outline-none font-medium hover:text-gray-900 px-4 py-2 text-gray-700"
              v-on:click="clear"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-gray-100 min-h-screen p-6 text-gray-700 w-1/2">
      <h1 class="font-bold font-mono mb-8 select-none">template.json</h1>
      <!-- eslint-disable-next-line -->
      <div class="font-mono text-gray-700 whitespace-pre-wrap" id="template">{{ templateJson }}</div>
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
        builders: []
      }
    };
  },
  methods: {
    clear: function() {
      this.template = {
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
