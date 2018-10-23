import Vue from 'vue';
import Router from 'vue-router';
import Generator from './views/Generator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'generator',
      component: Generator,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
