import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		price: 1000,
		cnt: 1
	},
	getters: {
		total(state){
			return state.price * state.cnt;
		}
	},
	mutations: {
		plus(state){
			state.cnt++;
		},
		minus(state){
			if(state.cnt > 1){
				state.cnt--;
			}
		},
		setCnt(state, val){
			let cnt = parseInt(val);

			if(isNaN(cnt) || cnt < 1){
				cnt = 1;
			}

			state.cnt = cnt;
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