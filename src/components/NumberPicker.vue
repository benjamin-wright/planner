<template>
  <div class="panel">
    <button @click="$emit('up')" v-focus>&#9650;</button>
    <span>{{ numberString }}</span>
    <button @click="$emit('down')">&#9660;</button>
  </div>
</template>

<script>
import { zeroPad } from "../services/datetime";

export default {
  name: "NumberPicker",
  props: {
    number: Number
  },
  computed: {
    numberString: function() {
      return zeroPad(this.number);
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.panel {
  display: flex;
  flex-direction: column;
}

button {
  border: $background-color solid 1px;
  background: $foreground-color;
  color: $background-color;
  outline: none;

  &:hover {
    background: $background-color;
    color: $foreground-color;
  }
}
</style>
