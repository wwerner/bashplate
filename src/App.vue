<template>
  <div id="app" class="section">
    <navigation />
    <router-view></router-view>
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
