<template>
  <div class="events-index">
    <h1>Events:</h1>
    <div v-for="event in events">
      <h3>{{ event.name }}</h3>
      <img :src="event.image" :alt="event.name">
      <p>{{ event.formatted_date }} | {{ event.formatted_time }}</p>
      <p>Description: {{ event.description }}</p>
      <router-link :to="`/events/${event.id}`">More Info</router-link>
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
      events: [],
    };
  },
  created: function () {
    axios.get("/api/events").then((response) => {
      console.log(response.data);
      this.events = response.data;
    });
  },
  methods: {},
};
</script>