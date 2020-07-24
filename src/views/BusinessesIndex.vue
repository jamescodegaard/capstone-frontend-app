<template>
  <div class="businesses-index">
    <h1>Businesses:</h1>
    <div v-for="business in businesses">
      <h3>{{ business.name }}</h3>
      <img :src="business.image" :alt="business.name">
      <p>Address: {{ business.address }}</p>
      <p>Phone: {{ business.phone }}</p>
      <router-link :to="`/businesses/${business.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      businesses: [],
    };
  },
  created: function () {
    axios.get("/api/businesses").then((response) => {
      console.log(response.data);
      this.businesses = response.data;
    });
  },
  methods: {},
};
</script>