<template>
  <div class="box" id="options">
    <div class="field">
      <div class="control">
        <input class="input" type="text"
               placeholder="Script Description"
               v-model="mutableDesc">
      </div>
    </div>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
      <tr>
        <td>Req.</td>
        <td>Short</td>
        <td>Long</td>
        <td>Description</td>
        <td>Flag</td>
        <td>Default</td>
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
          <input class="input" type="text" v-model="opt.def" size="10" maxlength="50">
        </td>
        <td>
          <input class="input" type="text" v-model="opt.call" size="10" maxlength="30">
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
          <input class="input" type="text" v-model="newOpt.def" size="10" maxlength="50">
        </td>
        <td>
          <input class="input" type="text" v-model="newOpt.call" size="12" maxlength="30">
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
</template>

<script>

export default {
  name: 'options',
  props: ['description', 'options'],
  // eslint-disable-next-line
  data: function () {
    return {
      newOpt: {},
    };
  },
  computed: {
    mutableDesc: {
      get() {
        return this.description;
      },
      set(value) {
        this.$emit('descriptionUpdate', value);
      },
    },
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

<style scoped>
#options {
  overflow: scroll
}
::-webkit-scrollbar {
  display:none;
}

</style>

