<template>
  <div class="flex">
    <div class="w-1/2">
      <form class="p-6 shadow" v-on:submit.prevent>
        <label class="block mt-4">
          <span class="text-gray-700">Description</span>
          <input
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
          <span class="text-gray-700">Virtualization type</span>
          <select
            class="block form-select mt-1 w-full"
            v-model="ami_virtualization_type"
          >
            <option disabled value="">Virtualization type</option>
            <option>paravirtual</option>
            <option>hvm</option>
          </select>
        </label>
        <div class="flex items-center mt-6">
          <button
            class="bg-blue-500 font-semibold px-4 py-2 rounded-lg text-white"
            v-on:click="generate"
          >
            Generate
          </button>
          <button class="font-semibold ml-4 text-gray-700">Clear</button>
        </div>
      </form>
    </div>
    <div class="bg-gray-100 p-6 w-1/2">
      <div class="flex flex-col">
        <!-- eslint-disable-next-line -->
        <div class="font-mono mb-6 text-gray-700 whitespace-pre-wrap" id="template">{{ templateJson }}</div>
        <div class="items-end">
          <button
            class="bg-blue-500 font-semibold px-4 py-2 rounded-lg text-white"
            v-on:click="copy"
          >
            Copy
          </button>
        </div>
      </div>
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
      template: {
        builders: []
      }
    };
  },
  methods: {
    copy: function() {
      // Copies the text in the div container to the clipboard.
      let template = document.getElementById("template");
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(template);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
    },
    generate: function() {
      // Remove the first element from the builders list to prevent appending.
      this.template.builders.pop();
      let builder = {
        type: "amazon-ebs"
      };
      builder.ami_description = this.ami_description;
      builder.ami_name = this.ami_name;
      builder.ami_virtualization_type = this.ami_virtualization_type;
      this.template.builders.push(builder);
    }
  }
};
</script>
