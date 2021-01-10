<template>
  <div class="mask">
    <div class="panel">
      <div class="picker">
        <NumberPicker :number="hour" :min="0" :max="12" /> : <NumberPicker :number="minute" :min="0" :max="60" />
      </div>
      <div class="buttons">
        <button v-on:click="$emit('picked')">ok</button>
        <button v-on:click="$emit('cancel')">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import NumberPicker from "./NumberPicker";

export default {
  name: "TimePicker",
  props: {
    time: Object,
    min: Object,
    max: Object
  },
  computed: {
    hour: function() {
      return Number.parseInt(this.time.split(":")[0])
    },
    minute: function() {
      return Number.parseInt(this.time.split(":")[1])
    }
  },
  components: {
    NumberPicker
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: $mask;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}

.panel {
  padding: 1em;
  background: $foreground-color;
  color: $background-color;
  border-radius: 1em;
}

.picker {

}

.buttons {

}
</style>
