import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products:[
			{
				id: 1,
				name: 'apples',
				price: 100,
				cnt: 1
			},
			{
				id: 2,
				name: 'pears',
				price: 150,
				cnt: 2
			},
			{
				id: 3,
				name: 'bananas',
				price: 60,
				cnt: 3
			}
		]		
	},
	getters: {
		total(state){
			let productsTotal = [];
			productsTotal = state.products.map((product) =>{				
				return {
						'id':product.id,
						'name':product.name,
						'sum':product.price * product.cnt
					}
			});
			return productsTotal;
		}
	},
	mutations: {
		plus(state, id){			
			state.products.forEach(function(product){
				if(product.id === id){
					product.cnt++;
				}				
			});			
		},
		minus(state, id){
			state.products.forEach(function(product){
				if(product.id === id){
					if(product.cnt >= 0){
						product.cnt--;
					}
				}

			});
		},
		setCnt(state, id, val){
			let cnt = parseInt(val);

			if(isNaN(cnt) || cnt < 0){
				cnt = 0;
			}
			state.products.forEach(function(product){
				if(product.id === id){
					if(product.cnt >= 0){
						product.cnt = cnt;
					}
				}

			});			
		}
	},
	/*
	actions: {
		plus: async function(store){
			//return new Promise(async function(resolve, reject){
				let res = await fetch('cart') // true
				store.commit('plus');
				resolve();
			//});
		}
	},
	*/
	strict: process.env.NODE_ENV !== 'production'
});