<template>
	<div class="form-group">
		<label>
			{{ name }}
			<transition v-if="activated"
							name="flipY" 
							mode="out-in"
							appear
							appear-active-class="fadeIn"
			>
				<app-icon :name="iconName" 
							 :class="iconClasses"
							 :key="iconName"
				/>
			</transition>
		</label>
		<input type="text"
				 class="form-control" 
				 :value="value"
				 @input="onInput"
		>
	</div>
</template>
<script>
	import AppIcon from 'vue-awesome/components/Icon';

	import 'vue-awesome/icons/check-circle';
	import 'vue-awesome/icons/exclamation-circle';

	export default {
		components: {
			AppIcon
		},
		props: {
			pattern: RegExp, 
			name: String,
			value: String
		},
		data(){
			return {
				activated: false
			}
		},
		created(){
			if(this.value !== ''){
				this.activated = true;
				this.onValidChange();	
			}
		},
		computed: {
			valid(){
				return this.pattern.test(this.value);
			},
			iconName(){
				return this.valid ? 'check-circle' : 'exclamation-circle';
			},
			iconClasses(){
				return this.valid ? 'text-success' : 'text-danger';
			}
		},
		methods: {
			onInput(e){
				this.activated = true;

				this.$emit('change', {
					value: e.target.value
				});
			},
			onValidChange(){
				this.$emit('valid', {
					valid: this.valid
				});
			}
		},
		watch: {
			valid(){
				this.onValidChange();
			}
		}
	}
</script>
<style scoped>
	
	.flipY-enter-active{
		animation: 0.5s flipInY;
	}

	.flipY-leave-active{
		animation: 0.5s flipOutY;
	}

	.fadeIn{
		animation: 0.5s fadeIn;
	}

	@keyframes flipInY{
		from{transform: rotateY(-90deg)}
		to{transform: rotateY(0deg)}
	}

	@keyframes flipOutY{
		from{transform: rotateY(0deg)}
		to{transform: rotateY(90deg)}
	}

	@keyframes fadeIn{
		from{opacity: 0;}
		to{opacity: 1;}
	}

</style>