import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart.js';
import products from './modules/products.js';
import menu from './modules/menu.js';

export const store = new Vuex.Store({
	modules: {
		cart,
		products,
		menu
	},
	strict: process.env.NODE_ENV !== 'production'
});