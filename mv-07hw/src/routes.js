import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductsList from './components/ProductsList';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import E404 from './components/E404';

let routes = [
	{
		path: '/',
		redirect: '/products'
	},
	{
		name: 'products',
		path: '/products',
		component: ProductsList
	},
	{
		name: 'product',
		path: '/products/:id',
		component: Product
	},
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'order',
		path: '/order',
		component: Checkout
	},
	{	name:'404page',
		path: '/404',
		component: E404
	},
	{
		path: '*',
		redirect: '/404'
	}
];

export default new VueRouter({
	mode: 'history',
	routes
});