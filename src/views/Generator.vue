<template>
  <div class="section">
    <div class="columns is-desktop">
      <div class="column is-12-tablet is-12-mobile is-12-touch is-12-desktop is-7-widescreen is-7-fullhd">
        <options :description="description" :options="options" @descriptionUpdate="descriptionUpdated" />
      </div>
      <div class="column">
        <div class="box">
          <result :description="description" :options="options"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Result from '@/components/Result.vue';
import Options from '@/components/Options.vue';

export default {
  name: 'generator',
  components: {
    Result, Options,
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

