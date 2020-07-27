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
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  top: 0;
  bottom: 0;
  height: 500px;
  width: 100%;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      businesses: [],
    };
  },
  mounted: function () {
    axios.get("/api/businesses").then((response) => {
      console.log(response.data);
      this.businesses = response.data;
    });

    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_WEB_TOKEN;
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-91.6656, 41.9779], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
  methods: {},
};
</script>