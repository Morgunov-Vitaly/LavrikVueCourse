<template>
	<div>
		<div v-for="(product) in products" :key="product.id">
			<h2>id: {{product.id}} - {{product.name}}</h2>
			<div class="price">Price: {{ product.price }}</div>			
			<button class="btn btn-warning" @click="minus(product.id)">
				-1
			</button>
			<input type="text" :value="product.cnt" @change="onInput($event, product.id)">
			<button class="btn btn-success" @click="plus(product.id)">
				+1
			</button>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';

	export default {
		computed: mapState({products: 'products'}),
		methods: {
			...mapMutations(['minus', 'plus', 'setCnt']),
			onInput(e, id){
				console.log('id' + id);
				let val = e.target.value.trim();
				this.setCnt(val, id);
			}
		}
	}

</script>