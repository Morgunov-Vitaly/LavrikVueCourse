import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store/index.js';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'