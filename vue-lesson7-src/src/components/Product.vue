<template>
	<div>
		<h1>Title</h1>
		Back to products
		<hr>
		<div class="alert alert-success">
			price
		</div>
		{{ productProxy(id) }}
		// homework -> show product & buttons
		// or 404 error page
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			id(){
				return this.$route.params.id;
			},
			...mapGetters({
				productProxy: 'products/item'
			})
		}
	}
</script>