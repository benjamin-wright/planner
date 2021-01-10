<template>
  <div>
    <p>Picker</p>
  </div>
</template>

<script>
export default {
  name: "TimePicker",
  props: {
    time: Object,
    min: Object,
    max: Object
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";
</style>
