<template>
  <div id='app'>
    <!-- <img alt='Vue logo' src='./assets/logo.png'> -->
    <h1>basherplate</h1>
    <config />
    <result />
  </div>
</template>

<script>
import Config from './components/Config.vue';
import Result from './components/Result.vue';

export default {
  name: 'app',
  components: {
    Result,
    Config,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
