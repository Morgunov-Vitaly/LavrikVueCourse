<template>
  <div class="container">
    <div v-if="isSended">
      <h1>All Done!</h1>
    </div>
    <form v-else>
      <b-progress :value="fieldsValid" :max="info.length"></b-progress>
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
      <button
        class="btn btn-primary"
        :disabled="!formDone"
        type="button"
        @click="onModalShow"
      >Send Data</button>
    </form>
    <b-modal v-model="modalShow">
      <h2 slot="modal-title">Hello From Modal!</h2>
      <table class="table table-bordered">
        <tr v-for="(item, i) in info" :key="i">
          <td>{{i}}) {{item.name}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
      <button
        slot="modal-footer"
        class="btn btn-primary"        
        type="submit"
        @click="onClick"
      >Send</button>
    </b-modal>
  </div>
</template>
<script>
import { BProgress } from "bootstrap-vue";
import AppInput from "./components/Input.vue";
export default {
  components: {
    AppInput,
	BProgress
  },
  data() {
    return {
      modalShow: false,
      isSended: false,
      info: [
        {
          name: "Name",
          value: "Dmitry",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 1",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/
        }
      ]
    };
  },
  created() {
    this.info.map(field => {
      this.$set(field, "valid", false);
    });
  },
  methods: {
    onInput(i, e) {
      this.info[i].value = e.value.trim();
    },
    onValid(i, e) {
      this.info[i].valid = e.valid;
	},
	onModalShow(){
		if (this.formDone) {
			this.modalShow = true;
		}	
	},
    onClick() {
		this.isSended = true;
		this.modalShow = false;
		console.log("this.isSended" + this.isSended);
		console.log("this.modalShow" + this.modalShow);
    }
  },
  computed: {
    fieldsValid() {
      return this.info.reduce((t, f) => t + (f.valid ? 1 : 0), 0);
    },
    formDone() {
      return this.fieldsValid === this.info.length;
    }
  }
};
</script>