<template>
  <div class="horizontal">
    <p>{{ dayString }}</p>
    <div class="horizontal">
      <label>{{ "start" }}</label>
      <label>{{ "end" }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayView",
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
    getId: function(label) {
      return `${label}-${this.weekNum}-${this.dayNum}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.horizontal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    margin: 0 0.5em;
  }
}

input {
  display: none;
}
</style>
