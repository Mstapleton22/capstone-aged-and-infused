import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "disclaimer" */ './views/Welcome.vue'),
      // component: Welcome,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      // route level code-splitting
      // this generates a separate chunk (disclaimer.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "disclaimer" */ './views/Disclaimer.vue'),
    },
    {
      path: '/disclaimerFail',
      name: 'DisclaimerFail',
      component: () => import(/* webpackChunkName: "disclaimer" */ './views/DisclaimerFail.vue'),
      // component: Welcome,
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: () => import(/* webpackChunkName: "disclaimer" */ './views/Introduction.vue'),
      // component: Welcome,
    },
  ],
});
