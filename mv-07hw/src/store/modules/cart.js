export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		inCart: (state) => (id) => state.products.some((el) => el.id === id), //Проверка есть ли товар в корзие
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
				if(!store.getters.inCart(id)){ //проверяем если нет такого товара в корзине
					store.commit('add', id); //то запускаем одноименную мутацию add с параметром id
					resolve();
				}
				// reject
			});
		},
		remove(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){ //проверка на наличие данного товара в корзине
					store.commit('remove', id);
					resolve();
				}
				// reject
			});
		}
	}
}