<template>
  <div id="app">
    <navigation />

    <router-view>s</router-view>

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {

}
</style>
