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
      component: () => import('./views/Welcome.vue'),
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home,
    // },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: () => import('./views/Disclaimer.vue'),
    },
    {
      path: '/disclaimerFail',
      name: 'DisclaimerFail',
      component: () => import('./views/DisclaimerFail.vue'),
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: () => import('./views/Introduction.vue'),
    },
    {
      path: '/liquor',
      name: 'Liquor',
      component: () => import('./components/Liquor.vue'),
    },
    {
      path: '/choice',
      name: 'Choice',
      component: () => import('./components/Choice.vue'),
    },
    {
      path: '/preset',
      name: 'Preset',
      component: () => import('./components/Preset.vue'),
    },
    {
      path: '/ingredientcategory',
      name: 'Ingredient_Category',
      component: () => import('./components/Category.vue'),
    }, {
      path: '/ingredients',
      name: 'Ingredients',
      component: () => import('./components/Ingredients.vue'),
    },
  ],
});
