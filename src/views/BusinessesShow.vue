<template>
  <div class="businesses-show">
    <div> <!-- business info -->
      <h1>{{ business.name }}</h1>
      <img :src="business.image" :alt="business.name">
      <p>Address: {{ business.address }}</p>
      <p>Email: {{ business.email }}</p>
      <p>Phone: {{ business.phone }}</p>
      <p>Description: {{ business.description }}</p>
      <p>Website: {{ business.website }}</p>
      <p>Hours: {{ business.hours }}</p>
      <router-link v-if="$parent.getBusinessId() == business.id" :to="`/businesses/${this.business.id}/edit`">Edit Business</router-link>
    </div>
    <div> <!-- business events index-->
    <h2>Events:</h2>
      <div v-for="event in events"> 
        <h3>{{ event.name }}</h3>
        <p>{{ event.formatted_date }}</p>
        <p>{{ event.formatted_time }}</p>
        <p>{{ event.description }} </p>
        <p>Contact: {{ event.alt_contact }} </p>
        <p>Email: {{ event.alt_email }} </p>
        <router-link v-if="$parent.getBusinessId() == business.id" :to="`/events/${event.id}/edit`">Edit Event</router-link>
      </div>
      <router-link v-if="$parent.getBusinessId() == business.id" :to="`/events/new`">New Event</router-link>
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
      business: {},
      events: [],
    };
  },
  created: function () {
    axios.get(`/api/businesses/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.business = response.data;
      this.events = response.data.events;
    });
  },
  methods: {},
};
</script>