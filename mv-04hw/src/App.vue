<template>
  <div id="app">
    <form v-if="(!isSended || !formDone)" @submit.prevent="isSended = true">
      <b-progress :value="fieldsValid" :max="info.length" animated variant="success"></b-progress>
      <div>
        <app-input
          v-for="(field, i) in info"
          :name="field.name"
          :value="field.value"
          :pattern="field.pattern"
          :key="i"
          @change="onInput(i, $event)"
          @valid="onValid(i, $event)"
        ></app-input>
      </div>
      <button class="btn btn-primary" :disabled="!formDone">Send Data</button>
    </form>
    <div v-else>
      <table class="table table-bordered">
        <tr v-for="( item, key ) in info" :key="key" >
            <td>{{ key + 1 }} ) {{item.name}}</td>
            <td>{{item.value}} | {{item.valid}}
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import AppInput from './components/AppInput.vue';

  export default {
    components: {
    AppInput
    },
    data() {
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
      }
    },
    created(){
        this.info.map((field) => {
       // this.$set(field, 'valid', false); 
        //1-й способ: 
         this.$set( field, 'valid', (field.value) ? field.pattern.test(field.value) : false ); //при 2-м способе закомментирвоать
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
      },      
      progressWidth(){
        return {
          width: this.fieldsValid / this.info.length * 100 + '%'
        }
      }
    }
    //components: {'app-input', }
  };
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
  max-width: 900px
}
</style>