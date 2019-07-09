<template>
	<div class="container">
		<form @submit.prevent="isSended = true">
			<b-progress :value="fieldsValid" :max="info.length"></b-progress>
			<div>
				<app-input v-for="(field, i) in info"
							  :name="field.name"
							  :value="field.value"
							  :pattern="field.pattern"
							  :key="i"
							  @change="onInput(i, $event)"
							  @valid="onValid(i, $event)"
				></app-input>
			</div>
			<button class="btn btn-primary" :disabled="!formDone">
				Send Data
			</button>
		</form>
		<div>
			<table class="table table-bordered">
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	import { BProgress } from 'bootstrap-vue'
	import AppInput from './components/Input.vue';

	export default {
		components: {
			AppInput,
			BProgress
		},
		data(){
			return {
				isSended: false,
				info: [
					{
						name: 'Name',
						value: 'Dmitry',
						pattern: /^[a-zA-Z ]{2,30}$/,
					},
					{
						name: 'Phone',
						value: '',
						pattern: /^[0-9]{7,14}$/,
					},
					{
						name: 'Email',
						value: '',
						pattern: /.+/,
					},
					{
						name: 'Some Field 1',
						value: '',
						pattern: /.+/,
					},
					{
						name: 'Some Field 2',
						value: '',
						pattern: /.+/,
					}
				]
			};
		},
		created(){
			this.info.map((field) => {
				this.$set(field, 'valid', false);
			});
		},
		methods: {
			onInput(i, e){
				this.info[i].value  = e.value.trim();
			},
			onValid(i, e){
				this.info[i].valid  = e.valid;
			}
		},
		computed: {
			fieldsValid(){
				return this.info.reduce((t, f) => t + (f.valid ? 1 : 0), 0)
			},
			formDone(){
				return this.fieldsValid === this.info.length;
			}
		}
	}
</script>