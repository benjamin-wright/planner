<template>
  <div class="horizontal">
    <WeekView
      v-for="week in weeks"
      :key="week.key"
      :date="week.startDate"
      :weekNum="week.key"
      :shifts="week.shifts"
    />
  </div>
</template>

<script>
import { DateTime } from "luxon";
import WeekView from "./WeekView";

export default {
  name: "PlanView",
  props: {
    config: Object,
    plan: Array
  },
  computed: {
    weeks: function() {
      const weeks = [];
      const start = DateTime.fromFormat(this.config.startDate, "yyyy-MM-dd");

      for (let i = 0; i < this.config.cycleWeeks; i++) {
        const weekStart = start.plus({ weeks: i });
        const shifts = this.plan.filter(
          shift =>
            weekStart.weekNumber ==
            DateTime.fromFormat(shift.date, "yyyy-MM-dd").weekNumber
        );
        weeks.push({
          key: i,
          startDate: weekStart,
          shifts
        });
      }

      return weeks;
    }
  },
  components: {
    WeekView
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
