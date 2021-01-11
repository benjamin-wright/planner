<template>
  <div class="mask">
    <div class="panel">
      <div class="picker">
        <NumberPicker
          :number="hour"
          :min="minHour"
          :max="maxHour"
          :increment="1"
        />
        <span>:</span>
        <NumberPicker :number="minute" :min="0" :max="60" :increment="15" />
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
    time: String,
    min: Object,
    max: Object
  },
  computed: {
    hour: function() {
      return Number.parseInt(this.time.split(":")[0]);
    },
    minute: function() {
      return Number.parseInt(this.time.split(":")[1]);
    },
    minHour: function() {
      return this.min.hour;
    },
    maxHour: function() {
      return this.max.hour;
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
  display: flex;
  flex-direction: row;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

button {
  border: $background-color solid 1px;
  border-radius: 0.2em;
  background: $foreground-color;
  color: $background-color;
  padding: 0.2em 0.5em;
  outline: none;

  &:hover,
  &:focus {
    background: $background-color;
    color: $foreground-color;
  }
}
</style>
