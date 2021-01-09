<template>
  <div class="horizontal">
    <WeekView
      v-for="week in weeks"
      :key="week.key"
      :date="week.startDate"
      :weekNum="week.key"
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
      const start = DateTime.fromISO(this.config.startDate);

      for (let i = 0; i < this.config.cycleWeeks; i++) {
        weeks.push({
          key: i,
          startDate: start.plus({ weeks: i })
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
