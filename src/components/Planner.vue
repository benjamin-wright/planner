<template>
  <div class="container">
    <Header :filename="data.name" />
    <PlanView :plan="data.plan" :config="data.config" />
  </div>
</template>

<script>
import Header from "./Header";
import PlanView from "./PlanView";

export default {
  name: "Planner",
  props: {
    data: Object
  },
  components: {
    Header,
    PlanView
  }
};
</script>

<style scoped>
.container {
  padding-top: 4em;
}
</style>
