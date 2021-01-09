<template>
  <div class="header">
    <p>File: {{ filename }}</p>
    <p class="link" v-on:click="clearData()">Exit</p>
  </div>
</template>

<script>
import { clearData } from "../services/io";

export default {
  name: "Header",
  props: {
    filename: String
  },
  methods: {
    clearData: clearData
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.header {
  display: flex;
  justify-content: space-between;
  background: $foreground-color;
  color: $background-color;
  margin: -8px -8px 0 -8px;
  padding: 1em 2em;
  font-weight: bold;
}

.link {
  cursor: pointer;
}
</style>
