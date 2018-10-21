<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="result-script">

    <!-- Don't 'fix' the code layout, it is required as in <pre>, otherwise we get whitespace in the script-->
    <pre>
<a class="button is-outlined is-link is-inverted is-pulled-right"
   v-clipboard:copy="script">
    <span>Copy&nbsp;</span>
    <span class="icon"><i class="far fa-copy fa-2x"></i></span>
</a><code class="language-bash" v-html="script"></code>
        </pre>
  </div>
</template>

<script>
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

import template from '@/templates/posix.hbs';

export default {
  name: 'Result',
  props: [
    'description',
    'options',
  ],
  mounted() {
    Prism.highlightAll();
  },
  computed: {
    script() {
      return template(this);
    },
  },
  watch: {
    script() {
      this.$nextTick(() => {
        Prism.highlightAll();
      });
    },
  },
  methods: {},
};
</script>

<style>
.result-script {
  font-size: smaller;
}

/* override bulma's numner style as it messes w/ prism's */
.number {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  border-radius: 0px;
  display: inline;
  font-size: 1rem;
  height: 1em;
  margin-right: 0rem;
  min-width: 0rem;
  padding: 0rem 0rem;
  vertical-align: middle;
}
</style>
