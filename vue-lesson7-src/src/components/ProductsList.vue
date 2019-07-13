<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div v-for="(product, i) in products" class="col col-4">
			    <h4>{{ product.title }}</h4>
			    <div class="alert alert-success">{{ product.price }}</div>
			    <router-link :to="{name: 'product', params: {
			    	id: product.id
			    }}">Get more...</router-link>
			    <hr>
			    <button v-if="!inCart(product.id)"
			    			class="btn btn-success" 
			    			@click="addToCart(product.id)"
			    >
				    Add to cart
				 </button>
				 <button v-else
				 			class="btn btn-warning" 
				 			@click="removeFromCart(product.id)"
				 >
				    Remove from cart
				 </button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				products: 'products/all',
				inCart: 'cart/inCart'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.col{
		margin-top: 30px;
	}
</style>