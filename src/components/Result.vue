<template>
  <div class="result">
    <h2>result</h2>
    test <input v-model="description">
    <div class="result-script">

      <i class="clickable far fa-copy"
        v-clipboard:copy="script">
       </i>

      <pre><code class="language-bash" v-html="script"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

import template from '@/templates/posix.hbs';

export default {
  name: 'Result',
  // eslint-disable-next-line
  data: function () {
    return {
      description: 'foo',
      options: [
        {
          short: 'h', long: 'help', description: 'Show this help message.', flag: true, required: false, call: 'usage', exit: '0',
        },
        {
          short: 'v', long: 'version', description: 'Show version information.', flag: true, required: false, call: 'version', exit: '0',
        },
        {
          short: 't', long: 'test', description: 'Test Parameter', flag: false, required: true, default: 'testContent',
        },
      ],
    };
  },
  mounted() {
    Prism.highlightAll();
  },
  computed: {
    script() {
      return template(this.$data);
    },
  },
  watch: {
    script() {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.result-script {
  margin: 1vh;
}
.clickable:hover {
  cursor: pointer;
}
</style>
