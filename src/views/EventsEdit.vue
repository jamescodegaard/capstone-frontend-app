<template>
  <div class="events-edit">
    <form v-on:submit.prevent="editEvent(event)">
      <h2>{{ event.name }}</h2>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="event.name">
      </div>
      <div class="form-group">
        <label>Date:</label> 
        <datetime 
          type="datetime" 
          v-model="datetime"
          input="datetime"
          value-zone="UTC"
          zone="local"
          :format="{ 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          hour: 'numeric', 
          minute: '2-digit', 
          timeZoneName: 'short' 
          }"
          :phrases="{ok: 'Continue', cancel: 'Exit'}"
          :hour-step="1"
          :minute-step="15"
          :week-start="7"
          use12-hour
          auto
          >
        </datetime>
      </div>
      <div class="form-group">
        <label>Description:</label> 
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label>Contact Person:</label> 
        <input type="text" class="form-control" v-model="event.alt_contact">
      </div>
      <div class="form-group">
        <label>Email:</label> 
        <input type="text" class="form-control" v-model="event.alt_email">
      </div>
      <div class="form-group">
        <label>Image URL:</label> 
        <input type="text" class="form-control" v-model="event.image">
      </div>
      <div class="form-group">
        <div v-for="tag in tagsIndex">
          <input type="checkbox" :value="tag.id" v-model="checkedTagIds">
          <label :for="tag.id">#{{ tag.name }}</label>
        </div>
      </div>
      
      <input type="submit" class="btn btn-primary" value="Update">
      <input type="button" class="btn btn-primary" value="Delete" v-on:click="destroyEvent(event)">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
// import Vue from "vue";
// import { Datetime } from "vue-datetime";
// // You need a specific loader for CSS files
// import "vue-datetime/dist/vue-datetime.css";

// Vue.component("datetime", Datetime);

export default {
  data: function () {
    return {
      event: [],
      errors: [],
      tagsIndex: [],
      checkedTagIds: [],
      datetime: "",
    };
  },
  created: function () {
    axios.get(`/api/events/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.event = response.data;
      this.datetime = response.data.date;
      this.checkedTagIds = response.data.tags.map((tag) => tag.id);
    });
    axios.get(`/api/tags`).then((response) => {
      console.log(response.data);
      this.tagsIndex = response.data;
    });
  },
  methods: {
    editEvent: function (event) {
      var params = {
        name: event.name,
        date: this.datetime,
        alt_contact: event.alt_contact,
        alt_email: event.alt_email,
        description: event.description,
        image: event.image,
        tag_ids: this.checkedTagIds,
      };
      axios
        .patch(`/api/events/${this.event.id}`, params)
        .then((response) => {
          console.log("Updated Event:", response.data);
          this.$router.push(`/events/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    destroyEvent: function (event) {
      axios.delete(`/api/events/${event.id}`).then((response) => {
        console.log("Event successfully destroyed!");
        this.$router.push("/");
      });
    },
  },
};
</script>