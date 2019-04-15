import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGoodshare from "vue-goodshare"
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook"

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  components: {
    VueGoodshare,
    VueGoodshareFacebook
  },
  render: h => h(App),
}).$mount('#app');
