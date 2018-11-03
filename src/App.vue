<template>
  <div id="app" class="section">
    <navigation />
    <router-view></router-view>
    <footer class="footer box">
      <div class="content has-text-centered">
        Bash Plate is standing on the shoulders of these giants:
          <a href="https://vuejs.org/">Vue.js</a>,
          <a href="https://bulma.io/">Bulma</a>,
          <a href="https://prismjs.com/">Prism.js</a>,
          <a href="https://handlebarsjs.com/">handlebars</a>.
        Thanks to
          <a href="https://github.com">Github</a> for VCS,
          <a href="https://zeit.co">Zeit</a> for hosting,
          <a href="https://circleci.com">CircleCI</a> for CI/CD.
      </div>
    </footer>
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

.footer {
  background-color: transparent;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
}
</style>
