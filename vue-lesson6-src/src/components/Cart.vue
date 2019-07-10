<template>
	<div>
		<ul>
			<li v-for="product, i in products" v-if="product.cnt > 0" >
				In Cart: {{ product.cnt }} {{product.name}}<br>
				Total: {{ total[i].sum }}
			</li>
		</ul>

	</div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex';

	export default {
		computed: {
			...mapState(['products']),
			...mapGetters(['total'])
		}
	}

</script>