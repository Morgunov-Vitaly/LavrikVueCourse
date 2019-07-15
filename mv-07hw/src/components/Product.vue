<template>
	<div>
		<h1>Title</h1>
		 <router-link :to="{name: 'products'}">Back to products...</router-link>
		<hr>
		<div class="alert alert-success">
			price
		</div>
		<p>id: {{ id }}</p>
		<p>Title: {{ (productProxy(id)) ? productProxy(id).title : '' }}</p>
		<p>Price: {{ (productProxy(id)) ? productProxy(id).price : ''  }}</p>
		<hr>
		<button v-if="!inCart(id)"
			class="btn btn-success" 
			@click="addToCart(id)"
		>
		Add to cart
		</button>
		<button v-else
			class="btn btn-warning" 
			@click="removeFromCart(id)"
		>
		Remove from cart
		</button>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		computed: {
			id(){				
				return this.$route.params.id; //обращаемся к объекту $route
			},
			...mapGetters({
				productProxy: 'products/item',
				inCart: 'cart/inCart'
			})
		},
		methods:{
			...mapActions({
				addToCart: 'cart/add',
				removeFromCart: 'cart/remove'
			})
		},
		 created: function(){	
			 /* использовал хук в надежде, что удасться до рендерера шаблона выяснить существование нужного товара 
			 и если нет - осуществить редирект до того, как могут возникнуть ошибки связанные с undefined но это не помогает */
		 	if(!(this.productProxy(this.id))){
		 		 this.$router.push({ name: '404page', params: {message:'Wrong product ID'}}); //редирект на 404 страницу

		 	}
		 }
	}
</script>