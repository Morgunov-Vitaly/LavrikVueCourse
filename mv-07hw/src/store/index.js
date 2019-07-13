import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart.js';
import products from './modules/products.js';
import menu from './modules/menu.js';

/* Подключаем модули хранилища разделенные по тематикам */
export const store = new Vuex.Store({
	modules: {
		cart,
		products,
		menu
	},
	/* Включаем режим strict только на время разработки */
	strict: process.env.NODE_ENV !== 'production'
});