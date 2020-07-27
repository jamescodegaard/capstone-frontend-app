<template>
  <div class="events-show">
    <img :src="event.image" :alt="event.name">
    <h3>{{ event.name }}</h3>
    <p>{{ event.date }} </p>
    <h3>Location</h3>
    <p>{{ business.name }}</p>
    <p>{{ business.address }}</p>
    <p>Contact: {{ event.alt_contact }} </p>
    <p>Email: {{ event.alt_email }} </p>
    <h4>Description</h4>
    <p>{{ event.description }} </p>
    <router-link :to="`/events/${event.id}/edit`">Edit Event</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
      business: {},
    };
  },
  created: function () {
    axios.get(`/api/events/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.event = response.data;
      this.business = response.data.business;
    });
  },
  methods: {},
};
</script>