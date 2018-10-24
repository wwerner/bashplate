<template>
  <div class="section">
    <div class="container">
      <p>Bash Plate lets you generate boilerplate for shell scripts that takes care of receiving, parsing, 
      validating and documenting script arguments.</p>
    </div>
    <options :description="description" :options="options" @descriptionUpdate="descriptionUpdated"/>
    <result :description="description" :options="options"/>
  </div>
</template>

<script>
import Result from '@/components/Result.vue';
import Options from '@/components/Options.vue';

export default {
  name: 'generator',
  components: {
    Result,
    Options,
  },
  // eslint-disable-next-line
  data: function () {
    return {
      description: 'Script Description',
      options: [
        {
          short: 'h',
          long: 'help',
          description: 'Show this help message.',
          flag: true,
          required: false,
          call: 'usage',
          exit: '0',
        },
        {
          short: 'v',
          long: 'version',
          description: 'Show version information.',
          flag: true,
          required: false,
          call: 'version',
          exit: '0',
        },
        {
          short: 't',
          long: 'test',
          description: 'Test Parameter',
          flag: false,
          required: true,
          def: 'testContent',
        },
      ],
    };
  },
  methods: {
    removeOption(optIdx) {
      this.options.splice(optIdx, 1);
    },
    addOption(opt) {
      this.options.push(opt);
      this.newOpt = {};
    },
    descriptionUpdated(event) {
      this.description = event;
    },
  },
};
</script>

