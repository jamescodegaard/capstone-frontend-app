<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/businesses">Businesses</router-link>
      <router-link to="/events">Events</router-link>
      <router-link v-if="isLoggedIn()" :to="`/businesses/${getBusinessId()}`"
        >My Info</router-link
      >
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getBusinessId: function() {
      return localStorage.getItem("business_id");
    },
  },
};
</script>
