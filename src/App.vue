<template>
  <div id="app">
    <HomePage v-if="showHome" />
    <Loader v-if="showLoader" />
    <Planner v-if="!!data" :data="data" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Loader from "./components/Loader.vue";
import Planner from "./components/Planner.vue";

export default {
  name: "App",
  computed: {
    showLoader: function() {
      return this.loading;
    },
    showHome: function() {
      return !this.loading && !this.data;
    }
  },
  data() {
    return {
      loading: false,
      data: null
    };
  },
  mounted: function() {
    window.ipcRenderer.on("updated-data", this.setData);
    window.ipcRenderer.on("pending-update", this.setLoading);
  },
  beforeDestroy: function() {
    window.ipcRenderer.removeListener("updated-data", this.setData);
    window.ipcRenderer.removeListener("pending-update", this.setLoading);
  },
  methods: {
    setLoading: function() {
      this.loading = true;
      this.data = null;
    },
    setData: function(event, data) {
      this.loading = false;
      this.data = data;
    }
  },
  components: {
    HomePage,
    Loader,
    Planner
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";

htlm {
  background: $background-color;
}

html,
body,
#app {
  height: 100%;
}

p {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $foreground-color;
}
</style>
