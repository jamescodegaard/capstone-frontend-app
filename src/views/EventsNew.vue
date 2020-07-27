<template>
  <div class="events-edit">
    <form v-on:submit.prevent="newEvent()">
      <h2>New Event</h2>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Date/Time:</label> 
        <input type="date" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <label>Description:</label> 
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <label>Contact Person:</label> 
        <input type="text" class="form-control" v-model="alt_contact">
      </div>
      <div class="form-group">
        <label>Email:</label> 
        <input type="text" class="form-control" v-model="alt_email">
      </div>
      <div class="form-group">
        <label>Image URL:</label> 
        <input type="text" class="form-control" v-model="image">
      </div>
      <div class="form-group">
        <div v-for="tag in tagsIndex">
          <input type="checkbox" :value="tag.id" v-model="checkedTags">
          <label :for="tag.id">{{ tag.name }}</label>
        </div>
      </div>
      
      <input type="submit" class="btn btn-primary" value="Create Event">
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
      errors: [],
      tagsIndex: [],
      checkedTags: [],
      name: "",
      date: "",
      alt_contact: "",
      alt_email: "",
      description: "",
      image: "",
    };
  },
  created: function () {
    axios.get(`/api/tags`).then((response) => {
      console.log(response.data);
      this.tagsIndex = response.data;
    });
  },
  methods: {
    newEvent: function () {
      var params = {
        name: this.name,
        date: this.date,
        alt_contact: this.alt_contact,
        alt_email: this.alt_email,
        description: this.description,
        image: this.image,
        tag_ids: this.checkedTags,
      };
      axios
        .post(`/api/events/`, params)
        .then((response) => {
          console.log("New Event:", response.data);
          this.$router.push(`/events/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
  },
};
</script>