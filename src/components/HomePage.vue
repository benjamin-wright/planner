<template>
  <div class="vertical">
    <h1>Welcome to the Planner app!</h1>
    <div class="horizontal">
      <button class="big-button" v-on:click="newData()">New</button>
      <button class="big-button" v-on:click="loadData()">Load</button>
    </div>
  </div>
</template>

<script>
import { newData, loadData } from "../services/io";
export default {
  name: "HomePage",
  methods: {
    newData,
    loadData
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/colors.scss";

.vertical {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.horizontal {
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.big-button,
.small-button,
.file-input {
  border: 1px solid $foreground-color;
  color: $foreground-color;
  background: transparent;

  &:hover,
  &:focus {
    outline: none;
    color: $highlight-color;
    background: $lowlight-color;
  }
}

.small-button {
  border-radius: 0.2em;
  font-size: 0.75em;
  padding: 0.25em 1.25em;
}

.big-button,
.file-input {
  border-radius: 0.4em;
  font-size: 1.5em;
  padding: 1.5em 2.5em;
}

input {
  display: none;
}
</style>
