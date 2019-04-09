import Vue from 'vue';
import Vuex from 'vuex';
import Preset from './modules/Preset.js'
import Category from './modules/Category.js'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Preset,
    Category
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});