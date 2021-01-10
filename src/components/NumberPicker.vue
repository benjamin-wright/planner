<template>
  <div class="panel">
    <button>&#9650;</button>
    <span>{{ number }}</span>
    <button>&#9660;</button>
  </div>
</template>

<script>
export default {
  name: "NumberPicker",
  props: {
    number: Number,
    min: Number,
    max: Number
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

</style>
