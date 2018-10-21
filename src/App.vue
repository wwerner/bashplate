<template>
  <div id="app">
    <section class="section  has-text-centered">
      <div class="container is-5">
        <!-- <img alt='Vue logo' src='./assets/logo.png'> -->
        <h1 class="title">Basherplate</h1>
        <p class="subtitle">generates bash script boilerplate code for option parsing</p>
      </div>
    </section>
    <div class="section">

    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="field">
            <div class="control">
              <input class="input" type="text"
                     placeholder="Script Description"
                     v-model="description">
            </div>
          </div>
          <table class="table">
            <thead>
            <tr>
              <td>Required</td>
              <td>Short</td>
              <td>Long</td>
              <td>Description</td>
              <td>Flag</td>
              <td>Call</td>
              <td>Exit</td>
              <td></td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(opt, idx) in options" :key="opt.short">
              <td>
                <input type="checkbox" v-model="opt.required">
              </td>
              <td>
                <input class="input" type="text" v-model="opt.short" size="1" maxlength="1">
              </td>
              <td>
                <input class="input" type="text" v-model="opt.long" size="9" maxlength="9">
              </td>
              <td>
                <input class="input" type="text" v-model="opt.description" size="25" maxlength="150">

              </td>
              <td>
                <input type="checkbox" v-model="opt.flag">
              </td>
              <td>
                <input class="input" type="text" v-model="opt.call" size="15" maxlength="30">

              </td>
              <td>
                <input class="input" type="number" min="0" step="1" max="255" v-model="opt.exit">
              </td>
              <td>

                <a class="button is-danger is-inverted" @click="removeOption(idx)">
                  <span class="icon"><i class="fas fa-times"></i></span>
                </a>

              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" v-model="newOpt.required">
              </td>
              <td>
                <input class="input" type="text" v-model="newOpt.short" size="1" maxlength="1">
              </td>
              <td>
                <input class="input" type="text" v-model="newOpt.long" size="9" maxlength="9">
              </td>
              <td>
                <input class="input" type="text" v-model="newOpt.description" size="25" maxlength="150">

              </td>
              <td>
                <input type="checkbox" v-model="newOpt.flag">
              </td>
              <td>
                <input class="input" type="text" v-model="newOpt.call" size="15" maxlength="30">

              </td>
              <td>
                <input class="input" type="number" min="0" step="1" max="255" v-model="newOpt.exit">
              </td>
              <td>

                <a class="button is-primary is-inverted" @click="addOption(newOpt)">
                  <span class="icon"><i class="fas fa-plus"></i></span>
                </a>
              </td>
            </tr>
            </tbody>

          </table>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <result :description="description" :options="options"/>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Result from './components/Result.vue';

export default {
  name: 'app',
  components: {
    Result,
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
          default: 'testContent',
        },
      ],
      newOpt: {},
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
  },
};
</script>

<style>
#app {

}
</style>
