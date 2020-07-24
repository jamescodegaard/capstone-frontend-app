<template>
  <div class="businesses-index">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {
    axios.get("/api/businesses").then((response) => {
      console.log(response.data);
    });
  },
  methods: {},
};
</script>