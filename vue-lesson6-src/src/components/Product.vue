<template>
	<div>
		<h2>Product title</h2>
		<div class="price">{{ priceSample }}</div>
		<hr>
		<button class="btn btn-warning" @click="minus">
			-1
		</button>
		<input type="text" :value="cnt" @change="onInput">
		<button class="btn btn-success" @click="plus">
			+1
		</button>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';

	export default {
		computed: mapState({priceSample: 'price', cnt: 'cnt'}),
		methods: {
			...mapMutations(['minus', 'plus', 'setCnt']),
			onInput(e){
				let val = e.target.value.trim();
				this.setCnt(val);
			}
		}
	}

</script>