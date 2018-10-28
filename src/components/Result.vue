<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="result-script">
    <div class="tabs">
      <ul>
        <li :class="{'is-active': flavor === 'posix'}" @click="flavor = 'posix'"><a>POSIX</a></li>
        <li :class="{'is-active': flavor === 'gnu'}" @click="flavor = 'gnu'"><a>GNU (w/ --long-opts)</a></li>
      </ul>
    </div>

    <!-- Don't 'fix' the code layout, it is required as in <pre>, otherwise we get whitespace in the script-->
    <pre>
<a class="button is-outlined is-link is-inverted is-pulled-right"
   style="margin-left: 1vh;"
   v-clipboard:copy="script">
    <span>Copy&nbsp;</span>
    <span class="icon"><i class="fa fa-copy"></i></span>
</a><a class="button is-outlined is-link is-inverted is-pulled-right"
       @click="save">
    <span>Download&nbsp;</span>
    <span class="icon"><i class="fa fa-download"></i></span>
</a><code class="language-bash" v-html="script"></code>
        </pre>
  </div>
</template>

<script>
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism-tomorrow.css';

import posixTemplate from '@/templates/posix.hbs';
import gnuTemplate from '@/templates/gnu.hbs';

export default {
  name: 'Result',
  props: [
    'description',
    'options'
  ],
  data() {
    return {
      flavor: 'posix',
      templates: {
        'posix': posixTemplate,
        'gnu': gnuTemplate,
      }
    }
  },
  mounted() {
    Prism.highlightAll();
  },
  computed: {
    script() {
      return this.templates[this.flavor](this);
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
    save() {
      console.log("saving")
    }
  },
};
</script>

<style>
.result-script {

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
