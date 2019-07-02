<template>
	<div>
		<h2>{{ num }}</h2>
		<button class="btn btn-success" @click="onClick">
			x2
		</button>
	</div>
</template>
<script>
	export default {
		props: ['min', 'max'],
		computed: {
			num(){
				return Math.floor(
								Math.random() * (this.max - this.min + 1)
						) + this.min;
			}
		},
		methods: {
			onClick(){
				this.$emit('double');
			},
			onNewNumber(){
				this.$emit('change', {
					num: this.num
				});
			}
		},
		created(){
			this.onNewNumber();
		},
		watch: {
			num(){
				this.onNewNumber();
			}
		}
	}
</script>
<style scoped>
	div{
		border: 1px solid red;
	}
</style>