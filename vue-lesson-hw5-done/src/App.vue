<template>
	<div class="container">
		<div v-if="formSend">
			<h2>All done!</h2>
		</div>
		<template v-else>
			<form class="form" @submit.prevent="confirm">
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
				<h2>Guests</h2>
				<transition-group tag="div" name="slide">
					<div v-for="(guest, i) in guests" :key="guest.id" class="form-group">
						<label @dblclick="removeGuest(i)">Guest {{ i + 1 }}</label>
						<input type="text" v-model.trim="guest.value" class="form-control">
					</div>
				</transition-group>
				<button class="btn btn-success" @click="addGuest" type="button">
					Add guest
				</button>
				<hr>
				<button class="btn btn-primary" :disabled="!formDone">
					Send Data
				</button>
			</form>
		</template>
		<b-modal v-model="formConfirmation" title="Check data" @ok="send">
			<table class="table table-bordered">
				<tr>
					<td></td>
					<td></td>
				</tr>
			</table>
		</b-modal>
	</div>
</template>
<script>
	import { BProgress, BModal } from 'bootstrap-vue'
	import AppInput from './components/Input.vue';

	export default {
		components: {
			AppInput,
			BProgress,
			BModal
		},
		data(){
			return {
				formConfirmation: false,
				formSend: false,
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
				],
				guests: [],
				guestsAI: 0
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
			},
			addGuest(){
				this.guests.push({
					id: ++this.guestsAI,
					value: ''
				});
			},
			removeGuest(i){
				this.guests.splice(i, 1);
			},
			confirm(){
				if(this.formDone){
					this.formConfirmation = true;
				}
			},
			send(){
				this.formConfirmation = false;
				this.formSend = true;
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

<style scoped>
	.form{
		overflow: hidden;
	}

	.slide-enter-active{
 		animation: slideInLeft 0.5s;
 	}

 	.slide-leave-active{
 		animation: slideOutRight 0.5s;
 	}

	@keyframes slideInLeft{
		from{opacity: 0; transform: translateX(-100vw);}
		to{opacity: 1; transform: translateX(0vw);}
	}

	@keyframes slideOutRight{
		from{opacity: 1; transform: translateX(0vw);}
		to{opacity: 0; transform: translateX(100vw);}
	}
</style>