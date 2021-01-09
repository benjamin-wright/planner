<template>
  <div>
    <Header v-bind:filename="data.name" />
    <h1>Data yeah!</h1>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Planner",
  props: {
    data: Object
  },
  components: {
    Header
  }
};
</script>

<style scoped></style>
