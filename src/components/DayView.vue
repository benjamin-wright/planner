<template>
  <div class="grid">
    <p>{{ dayString }}</p>
    <div class="horizontal">
      <label on:click="">{{ shift.start }}</label>
      &rarr;
      <label>{{ shift.end }}</label>
    </div>
    <TimePicker
      v-if="picking"
      :time="currentTime"
      :min="minTime"
      :max="maxTime"
    />
  </div>
</template>

<script>
import TimePicker from "./TimePicker";
import { DateTime } from "luxon";

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
      picking: false
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

      this.minTime = DateTime.fromObject(this.date);
      this.minTime.set({ hours: 0, minutes: 0 });

      this.maxTime.set({ hours: 0, minutes: 0 });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.grid {
  display: grid;
  grid-template-columns: 3em 9em;
}

.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    margin: 0 0.5em;
  }
}

label {
  cursor: pointer;
}
</style>
