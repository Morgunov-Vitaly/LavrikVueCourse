export default {
	namespaced: true,
	state: {
		items: [
			{
				id: 100,
				title: 'Ipnone 200',
				price: 12000
			},
			{
				id: 101,
				title: 'Samsung AAZ8',
				price: 22000
			},
			{
				id: 103,
				title: 'Nokia 3310',
				price: 5000
			},
			{
				id: 105,
				title: 'Huawei ZZ',
				price: 15000
			}
		]
	},
	getters: {
		all(state){
			return state.items;
		},
		_map(state){
			let map = {};

			state.items.forEach((product, i) => {
				map[product.id.toString()] = i;
			});

			return map;
		},
		item: (state, getters) => (id) => state.items[getters._map[id]]
		/*
		item(state, getters){
			return function(id){
				let index = getters._map[id];
				return state.items[index];
			}
		}
		*/
	},
	mutations: {

	},
	actions: {
		
	}
}