export default {
	namespaced: true,
	state: {
		items: [
			{
				name: 'products',
				title: 'Products'
			},
			{
				name: 'cart',
				title: 'Cart'
			},
			{
				name: 'order',
				title: 'Checkout'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	},
	mutations: {

	},
	actions: {
		
	}
}