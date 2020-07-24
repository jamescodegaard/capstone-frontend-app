<template>
  <div class="businesses-show">
    <h2>{{ business.name }}</h2>
    <img :src="business.image" :alt="business.name">
    <p>Address: {{ business.address }}</p>
    <p>Email: {{ business.email }}</p>
    <p>Phone: {{ business.phone }}</p>
    <p>Description: {{ business.description }}</p>
    <p>Website: {{ business.website }}</p>
    <p>Hours: {{ business.hours }}</p>
    <router-link :to="`/businesses/${business.id}/edit`">Update Business</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      business: {},
    };
  },
  created: function () {
    axios.get(`/api/businesses/${this.$route.params.id}`).then((response) => {
      this.business = response.data;
    });
  },
  methods: {},
};
</script>