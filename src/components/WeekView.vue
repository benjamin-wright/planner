<template>
  <div class="vertical">
    <p>{{ formattedDate }}</p>
    <DayView
      v-for="day in days"
      :key="day.key"
      :date="day.date"
      :weekNum="weekNum"
      :dayNum="day.key"
    />
  </div>
</template>

<script>
import DayView from "./DayView";

function getNumberSuffix(num) {
  const th = "th";
  const rd = "rd";
  const nd = "nd";
  const st = "st";

  if (num === 11 || num === 12 || num === 13) return th;

  let lastDigit = num.toString().slice(-1);

  switch (lastDigit) {
    case "1":
      return st;
    case "2":
      return nd;
    case "3":
      return rd;
    default:
      return th;
  }
}

export default {
  name: "WeekView",
  props: {
    date: Object,
    weekNum: Number
  },
  computed: {
    days: function() {
      const days = [];

      for (let i = 0; i < 7; i++) {
        const dayDate = this.date.plus({ days: i });
        days.push({
          key: i,
          date: dayDate
        });
      }

      return days;
    },
    formattedDate: function() {
      return this.date.toFormat("MMMM d") + getNumberSuffix(this.date.day);
    }
  },
  components: {
    DayView
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.vertical {
  flex-shrink: 0;
  padding: 1em;
}
</style>
