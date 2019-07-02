<template>
	<div class="container">
		<div class="sample">
			<app-random v-for="(item, i) in items" 
						   :min="item.min" 
						   :max="item.max"
						   :key="i"
						   @double="onDouble(i)"
						   @change="onChange(i, $event)"
			>
			</app-random>
			<hr>
			<h1>Total: {{ total }}</h1>
		</div>
	</div>
</template>
<script>
	import AppRandom from './components/Random.vue';

	export default {
		components: {
			AppRandom
		},
		data(){
			return {
				items: [
					{
						min: -2,
						max: 3,
						res: 0
					},
					{
						min: -3,
						max: 2,
						res: 0
					},
					{
						min: -4,
						max: 2,
						res: 0
					}
				]
			}
		},
		methods: {
			onDouble(i){
				this.items[i].min *= 2;
				this.items[i].max *= 2;
			},
			onChange(i, e){
				this.items[i].res = e.num;
			}
		},
		computed: {
			total(){
				return this.items.reduce((t, i) => t + i.res, 0);
			}
		}
	}
</script>