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
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label>Time:</label> 
        <input type="time" class="form-control" v-model="event.date">
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
          <input type="checkbox" :value="tag.id" v-model="checkedTags">
          <label :for="tag.id">{{ tag.name }}</label>
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
export default {
  data: function () {
    return {
      event: [],
      errors: [],
      tagsIndex: [],
      checkedTags: [],
    };
  },
  created: function () {
    axios.get(`/api/events/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.event = response.data;
    });
    axios.get(`/api/tags`).then((response) => {
      console.log(response.data);
      this.tagsIndex = response.data;
    });
  },
  methods: {
    editEvent: function (event) {
      var datetime = `${this.event.date} ${this.event.time}`;
      var params = {
        name: event.name,
        date: datetime,
        alt_contact: event.alt_contact,
        alt_email: event.alt_email,
        description: event.description,
        image: event.image,
        tag_ids: this.checkedTags,
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