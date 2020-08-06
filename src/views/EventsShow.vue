<template>
  <div class="events-show">
    <div class="inner-head">
      <div class="container">
        <div class="row">
        </div>
      </div>
    </div>
  <!-- END - Inner Head -->
    <!-- START - Half Contain Wrapp -->
    <div class="container-fluid">
      <div class="half-column-row">
        <div class="half-column-wrapp">
          <div class="half-column">
            <img :src="event.image" class="img-thumbnail thumbnail-green" :alt="event.name" />
          </div>
          <div class="half-column column-content">
            <h3>{{ event.name }}</h3>
            <p>{{ event.formatted_date }} </p>
            <p>{{ event.formatted_time }} </p>
            <h4>Description</h4>
            <p>{{ event.description }} </p>
            <router-link
              v-if="$parent.getBusinessId() == business.id"
              :to="`/events/${event.id}/edit`"
              >Edit Event</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- END - Half Contain Wrapp -->
     <!-- START - Contain Wrapp -->
    <div class="contain-wrapp padding-bottom-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-12">
            <div class="section-heading">
              <h3>Location</h3>
              <p><router-link :to="`/businesses/${business.id}`"
                      >{{ business.name }}</router-link></p>
              <p>{{ business.address }}</p>
              <p>Contact: {{ event.alt_contact }} </p>
              <p>Email: {{ event.alt_email }} </p>
              <i class="fa fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END - Contain Wrapp -->
    <!-- <img :src="event.image" :alt="event.name">
    <h3>{{ event.name }}</h3>
    <p>{{ event.formatted_date }} </p>
    <p>{{ event.formatted_time }} </p>
    <h3>Location</h3>
    <p>{{ business.name }}</p>
    <p>{{ business.address }}</p>
    <p>Contact: {{ event.alt_contact }} </p>
    <p>Email: {{ event.alt_email }} </p>
    <h4>Description</h4>
    <p>{{ event.description }} </p>
    <p>Event Tags:</p>
    <div v-for="tag in event.tags">
      <p>{{ tag.name }}</p>
    </div>
    <router-link :to="`/events/${event.id}/edit`">Edit Event</router-link> -->
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
      this.event = response.data;
      this.business = response.data.business;
    });
  },
  methods: {},
};
</script>