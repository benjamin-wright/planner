<template>
  <div class="horizontal">
    <p>{{ dayString }}</p>
    <button v-on:click="newShift(date)">+</button>
  </div>
</template>

<script>
import { newShift } from "../services/io";

export default {
  name: "DayPlaceholder",
  props: {
    date: Object,
    weekNum: Number,
    dayNum: Number
  },
  computed: {
    dayString: function() {
      return this.date.toFormat("EEE");
    }
  },
  methods: {
    newShift
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.horizontal {
  display: grid;
  grid-template-columns: 3em 9em;
}

button {
  border: 1px dashed $foreground-color;
  color: $foreground-color;
  background: transparent;
  border-radius: 0.2em;
  font-size: 0.75em;
  padding: 0.3em 1.25em;
  width: 100%;

  &:hover,
  &:focus {
    outline: none;
    color: $highlight-color;
    background: $lowlight-color;
  }
}
</style>
