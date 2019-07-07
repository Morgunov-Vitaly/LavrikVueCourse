<template>
  <div class="form-group">
    <label>
      {{ name }}&nbsp;
      <v-icon v-if="activated" :name="iconClasses.icon" :class="iconClasses.color" />
    </label>
    <input type="text" class="form-control" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    pattern: RegExp,
    name: String,
    value: String
  },
  data() {
    return {
      activated: (this.value) ? true : false //при 2-м способе закомментирвоать
    };
  },
  computed: {
    //2-й способ но при этом способе Vue ругается Computed property "activated" was assigned to but it has no setter.
    // activated() { 
    //   if (this.value) {
    //     this.onValidChange();
    //     return true;
    //   } else {
    //     return false;
    //   } 
    // },
    valid() {
      return this.pattern.test(this.value);
    },
    iconClasses() {
      return this.valid
        ? { icon: "check-circle", color: "text-success" }
        : { icon: "exclamation-circle", color: "text-danger" };
    }
  },
  methods: {
    onInput(e) {
      this.activated = true;

      this.$emit("change", {
        value: e.target.value
      });
    },
    onValidChange() {
      this.$emit("valid", {
        valid: this.valid
      });
    }
  },
  watch: {
    valid() {
      this.onValidChange();
    }
  }
};
</script>

<style scoped>
.form-group {
  text-align: left;
  font-weight: bold;
}
</style>
