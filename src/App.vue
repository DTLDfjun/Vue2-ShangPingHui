<template>
  <div id="app">
    <PJ_header></PJ_header>
    <router-view></router-view>
    <PJ_footer></PJ_footer>
  </div>
</template>

<script>
import PJ_header from "./components/header/header.vue";
import PJ_footer from "./components/footer/footer.vue";
export default {
  name: "App",
  components: {
    PJ_header,
    PJ_footer,
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
