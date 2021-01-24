<template>
  <div class="mask">
    <div
      class="panel"
      v-on:keyup.up="minuteUp()"
      v-on:keyup.down="minuteDown()"
    >
      <div class="picker">
        <NumberPicker :number="hour" @up="hourUp()" @down="hourDown()" />
        <span>:</span>
        <NumberPicker :number="minute" @up="minuteUp()" @down="minuteDown()" />
      </div>
      <div class="buttons">
        <button @click="$emit('picked', { hour, minute })">ok</button>
        <button @click="$emit('cancel')">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import NumberPicker from "./NumberPicker";

function minCheck(hour, minute, minimum) {
  const valueMinutes = hour * 60 + minute;
  const minMinutes = minimum.hour * 60 + minimum.minute;

  return valueMinutes < minMinutes;
}

function maxCheck(hour, minute, maximum) {
  const valueMinutes = hour * 60 + minute;
  const maxMinutes = maximum.hour * 60 + maximum.minute;

  return valueMinutes > maxMinutes;
}

export default {
  name: "TimePicker",
  props: {
    time: String,
    min: Object,
    max: Object
  },
  data: function() {
    return {
      hour: Number.parseInt(this.time.split(":")[0]),
      minute: Number.parseInt(this.time.split(":")[1])
    };
  },
  components: {
    NumberPicker
  },
  methods: {
    hourUp: function() {
      this.hour += 1;

      if (maxCheck(this.hour, this.minute, this.max)) {
        this.minute = this.max.minute;
        this.hour = this.max.hour;
      }
    },
    hourDown: function() {
      this.hour -= 1;

      if (minCheck(this.hour, this.minute, this.min)) {
        this.minute = this.min.minute;
        this.hour = this.min.hour;
      }
    },
    minuteUp: function() {
      this.minute += 15;

      if (this.minute > 45) {
        this.minute = 0;
        this.hour += 1;
      }

      if (maxCheck(this.hour, this.minute, this.max)) {
        this.minute = this.max.minute;
        this.hour = this.max.hour;
      }
    },
    minuteDown: function() {
      this.minute -= 15;

      if (this.minute < 0) {
        this.minute = 45;
        this.hour -= 1;
      }

      if (minCheck(this.hour, this.minute, this.min)) {
        this.minute = this.min.minute;
        this.hour = this.min.hour;
      }
    }
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
