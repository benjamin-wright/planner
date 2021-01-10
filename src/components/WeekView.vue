<template>
  <div class="vertical">
    <p>{{ formattedDate }}</p>
    <template v-for="day in days">
      <DayView
        v-if="day.shift"
        :key="day.key"
        :date="day.date"
        :weekNum="weekNum"
        :dayNum="day.key"
        :shift="day.shift"
      />
      <DayPlaceholder
        v-if="!day.shift"
        :key="day.key"
        :date="day.date"
        :weekNum="weekNum"
      />
    </template>
  </div>
</template>

<script>
import DayView from "./DayView";
import DayPlaceholder from "./DayPlaceholder";
import { getNumberSuffix } from "../services/datetime";

export default {
  name: "WeekView",
  props: {
    date: Object,
    weekNum: Number,
    shifts: Array
  },
  computed: {
    days: function() {
      const days = [];

      for (let i = 0; i < 7; i++) {
        const dayDate = this.date.plus({ days: i });
        const filtered = this.shifts.filter(
          shift => shift.date == dayDate.toFormat("yyyy-MM-dd")
        );

        days.push({
          key: i,
          date: dayDate,
          shift: filtered.length > 0 ? filtered[0] : undefined
        });
      }

      return days;
    },
    formattedDate: function() {
      return this.date.toFormat("MMMM d") + getNumberSuffix(this.date.day);
    }
  },
  components: {
    DayView,
    DayPlaceholder
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.vertical {
  flex-shrink: 0;
  padding: 1em;

  > * {
    margin: 0.2em 0;
  }
}
</style>
