<template>
	<div class="form-group">
		<label>
			{{ name }}
			<app-icon v-if="activated" :name="iconName" :class="iconClasses"/>
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