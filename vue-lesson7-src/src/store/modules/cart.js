export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		inCart: (state) => (id) => state.products.some((el) => el.id === id),
		total(){
			//hw
		}
	},
	mutations: {
		add(state, id){
			state.products.push({
				id
			});
		},
		remove(state, id){
			let index = state.products.findIndex((el) => el.id === id);
			state.products.splice(index, 1);
		}
	},
	actions: {
		add(store, id){
			return new Promise(function(resolve, reject){
				if(!store.getters.inCart(id)){
					store.commit('add', id);
					resolve();
				}
				// reject
			});
		},
		remove(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){
					store.commit('remove', id);
					resolve();
				}
				// reject
			});
		}
	}
}