<template>
  <div class="panel">
    <button v-on:click="up()">&#9650;</button>
    <span>{{ numberString }}</span>
    <button v-on:click="down()">&#9660;</button>
  </div>
</template>

<script>
export default {
  name: "NumberPicker",
  props: {
    number: Number,
    min: Number,
    max: Number,
    increment: Number
  },
  data: function() {
    return {
      internalNumber: this.number
    };
  },
  computed: {
    numberString: function() {
      if (this.internalNumber < 10) {
        return `0${this.internalNumber}`;
      }

      return this.internalNumber.toString();
    }
  },
  methods: {
    up: function() {
      this.internalNumber += this.increment;
      if (this.internalNumber > this.max) {
        this.internalNumber = this.max;
      }
    },
    down: function() {
      this.internalNumber -= this.increment;
      if (this.internalNumber < this.min) {
        this.internalNumber = this.min;
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
