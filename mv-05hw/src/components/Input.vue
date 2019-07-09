<template>
  <div class="form-group">
    <label>
      {{ name }}
      <transition
        name="icon-behavior"
        enter-active-class="animated flipInY"
        leave-active-class="animated flipOutY"
        appear-active-class="animated flipInX"
        appear
        mode="out-in"	
      >
        <app-icon v-if="activated" :name="iconName" :class="iconClasses" :key="iconName" />
      </transition>
    </label>
    <input type="text" class="form-control" :value="value" @input="onInput" />
  </div>
</template>
<script>
import AppIcon from "vue-awesome/components/Icon";

import "vue-awesome/icons/check-circle";
import "vue-awesome/icons/exclamation-circle";

export default {
  components: {
    AppIcon
  },
  props: {
    pattern: RegExp,
    name: String,
    value: String
  },
  data() {
    return {
      activated: false
      
    };
  },
  created() {
    if (this.value !== "") {
      this.activated = true;
      this.onValidChange();
    }
  },
  computed: {
    valid() {
      return this.pattern.test(this.value);
    },
    iconName() {
      return this.valid ? "check-circle" : "exclamation-circle";
    },
    iconClasses() {
    return this.valid ? "text-success" : "text-danger";
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
    valid(newVal, oldVal) {
      this.onValidChange();
    }
    }  
};
</script>
<style scoped>
.on-succes {
  animation-duration: 1s;
  animation-fill-mode: both;
  backface-visibility: visible !important;
  animation-name: flipInY;
}
.on-error {
  animation-duration: 1s;
  animation-fill-mode: both;
  backface-visibility: visible !important;
  animation-name: flipInY;
}

@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
}

@keyframes flipOutX {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-duration: 0.75s;
  animation-name: flipOutX;
  backface-visibility: visible !important;
}

@keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipInY {
  backface-visibility: visible !important;
  animation-name: flipInY;
}

@keyframes flipInY2 {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

@keyframes flipOutY {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.flipOutY {
  animation-duration: 0.75s;
  backface-visibility: visible !important;
  animation-name: flipOutY;
}

/* base classes */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animated.infinite {
  animation-iteration-count: infinite;
}

.animated.delay-1s {
  animation-delay: 1s;
}

.animated.delay-2s {
  animation-delay: 2s;
}

.animated.delay-3s {
  animation-delay: 3s;
}

.animated.delay-4s {
  animation-delay: 4s;
}

.animated.delay-5s {
  animation-delay: 5s;
}

.animated.fast {
  animation-duration: 800ms;
}

.animated.faster {
  animation-duration: 500ms;
}

.animated.slow {
  animation-duration: 2s;
}

.animated.slower {
  animation-duration: 3s;
}

@media (print), (prefers-reduced-motion: reduce) {
  .animated {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>