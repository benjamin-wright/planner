<template>
  <div class="grid">
    <p>{{ dayString }}</p>
    <div class="horizontal">
      <label @click="pickStart()">{{ shift.start }}</label>
      &rarr;
      <label @click="pickEnd()">{{ shift.end }}</label>
    </div>
    <TimePicker
      v-if="picking"
      :time="currentTime"
      :min="minTime"
      :max="maxTime"
      @picked="picked($event)"
      @cancel="cancel()"
    />
  </div>
</template>

<script>
import TimePicker from "./TimePicker";
import { DateTime } from "luxon";
import { getTimeParts, zeroPad } from "../services/datetime";
import { updateShift } from "../services/io";

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
      maxTime: null,
      selected: null
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
      this.selected = "start";
    },
    pickEnd: function() {
      this.picking = true;

      this.currentTime = this.shift.end;

      const day = DateTime.fromMillis(this.date.toMillis());

      this.minTime = day.set(getTimeParts(this.shift.start));
      this.maxTime = day.set({ hour: 23, minute: 45 });
      this.selected = "end";
    },
    picked: function({ hour, minute }) {
      this.picking = false;

      let start = this.shift.start;
      if (this.selected === "start") {
        start = `${zeroPad(hour)}:${zeroPad(minute)}`;
      }

      let end = this.shift.end;
      if (this.selected === "end") {
        end = `${zeroPad(hour)}:${zeroPad(minute)}`;
      }

      updateShift({ date: this.date, start, end });
    },
    cancel: function() {
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
