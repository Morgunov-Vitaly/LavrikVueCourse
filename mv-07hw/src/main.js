import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

import {store} from './store';
import router from './routes';

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
