
export default {
	namespaced: true,
	state: {
		products: [] //здесь храним только {id: '',  cnt: ''}
	},
	getters: {
		inCart: (state) => (id) => state.products.some((el) => el.id === id), //Проверка есть ли товар в корзине странно, почему изначально при работе с массивом мы использовали индекс el.id
		productCnt: (state) => (id) => { //Возвращает кол-во товара в корзине
			let index = state.products.findIndex((el) => el.id === id);
			return state.products[index].cnt;
		},
		items(state){ //возвращаем весь список товаров в корзине
			return state.products;
		}//,
	// 	total: (state, rootGetters) => (id) => { //возвращает суммарную стоимость по товару в корзине
	// 	let index = state.products.findIndex((el) => el.id === id);
	// 	console.log(rootGetters); //* rootState.item(id).price не могу получить доступ к стейту другого модуля
	// 	return state.products[index].cnt; 	
	// }
	},
	mutations: {
		add(state, id){
			state.products.push(
				{
					'id': id,
					'cnt': 1 //начальное значение кол-ва товара
				}
			);
		},
		remove(state, id){
			let index = state.products.findIndex((el) => el.id === id);
			state.products.splice(index, 1);
		},
		plus(state,id){
			let index = state.products.findIndex((el) => el.id === id);
			let newCnt = parseInt(state.products[index].cnt) + 1;
			let newElem = {
				'id': id,
				'cnt': newCnt 
			}
			state.products.splice(index, 1, newElem);
		},
		minus(state,id){
			let index = state.products.findIndex((el) => el.id === id);
			state.products[index].cnt--; 
		}
	},
	actions: {
		add(store, id){
			return new Promise(function(resolve, reject){
				if(!store.getters.inCart(id)){ //проверяем если нет такого товара в корзине
					store.commit('add', id); //то запускаем одноименную мутацию add с параметром id	
					//console.log(store.state);
					// let serialObj = JSON.stringify(store.state);
					// sessionStorage.setItem('cartItems', serialObj);				
					resolve();
				}
				// reject
			});
		},
		remove(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){ //проверка на наличие данного товара в корзине
					store.commit('remove', id);
					//  let serialObj = JSON.stringify(store.state);
					//  sessionStorage.setItem("cartItems", serialObj);
					resolve();
				}
				// reject
			});
		},
		plus(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){ //проверка на наличие данного товара в корзине
					store.commit('plus', id);
					resolve();
				}
				// reject			
			});
		},
		minus(store, id){
			return new Promise(function(resolve, reject){
				if(store.getters.inCart(id)){ //проверка на наличие данного товара в корзине
					if (store.getters.productCnt(id) > 1) {
						store.commit('minus', id);						
					} else {
					// если мы удаляем последний товар из корзины - то запускаем экшн на удаление товара
					store.commit('remove', id);
					}				
					resolve();
				}
				// reject			
			});
		}
	},
	beforeDestroy: function(){
		// Не работает при обновлении страницы 404 сохраняем данные перед уничтожением компонента  в sessionStorage - клоне localStorage
		//sessionStorage.setItem('cartItems', 'state.products'); 
	},
	beforeMount(){
		// восстанавливаем данные при создании компонента  из sessionStorage - клона localStorage
		// let arrOfProduts = JSON.parse(localStorage.getItem("cartItems"));
		// return this.state.products = (arrOfProduts) ? arrOfProduts.products : [];
	}
}