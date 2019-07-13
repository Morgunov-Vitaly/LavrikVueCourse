export default {
	namespaced: true,
	state: {
		/* Определяем основные данные меню */
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
				title: 'Order'
			}
		]
	},
	/* Геттеры - методы для получения данных */
	getters: {
		// все пункты меню
		items(state){
			return state.items;
		}
	},
	mutations: {

	},
	actions: {
		
	}
}