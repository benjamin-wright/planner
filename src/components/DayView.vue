<template>
  <div class="grid">
    <p>{{ dayString }}</p>
    <div class="horizontal">
      <label v-on:click="pickStart()">{{ shift.start }}</label>
      &rarr;
      <label>{{ shift.end }}</label>
    </div>
    <TimePicker
      v-if="picking"
      :time="currentTime"
      :min="minTime"
      :max="maxTime"
      v-on:picked="picked()"
    />
  </div>
</template>

<script>
import TimePicker from "./TimePicker";
import { DateTime } from "luxon";
import { getTimeParts } from "../services/datetime";

export default {
  name: "DayView",
  props: {
    date: Object,
    weekNum: Number,
    dayNum: Number,
    shift: Object
  },
  data: function() {
    return {
      picking: false,
      currentTime: null,
      minTime: null,
      maxTime: null
    };
  },
  components: {
    TimePicker
  },
  computed: {
    dayString: function() {
      return this.date.toFormat("EEE");
    }
  },
  methods: {
    pickStart: function() {
      this.picking = true;

      this.currentTime = this.shift.start;

      const day = DateTime.fromMillis(this.date.toMillis());

      this.minTime = day.set({ hour: 0, minute: 0 });
      this.maxTime = day.set(getTimeParts(this.shift.end));
    },
    picked: function() {
      this.picking = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.grid {
  display: grid;
  grid-template-columns: 3em 9em;
  user-select: none;
}

.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: $foreground-color;
  color: $background-color;

  > * {
    margin: 0 0.5em;
  }
}

label {
  cursor: pointer;
}
</style>
