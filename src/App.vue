<template>
  <div id="app">
    <body>
      <nav class="navbar navbar-white navbar-expand-lg fixed-top">
        <div class="container">
          <div class="navbar-logo">
            <a href="/index.html"
              ><img src="/assets/img/logo.png" alt="Ecada Logo"
            /></a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
              <li><router-link to="/businesses">Businesses</router-link></li>
              <li><router-link to="/events">Events</router-link></li>
              <li>
                <router-link
                  v-if="isLoggedIn()"
                  :to="`/businesses/${getBusinessId()}`"
                  >My Info</router-link
                >
              </li>
              <li>
                <router-link v-if="!isLoggedIn()" to="/signup"
                  >Signup</router-link
                >
              </li>
              <li>
                <router-link v-if="!isLoggedIn()" to="/login"
                  >Login</router-link
                >
              </li>
              <li>
                <router-link v-if="isLoggedIn()" to="/logout"
                  >Logout</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </body>
    <!-- <div id="nav">
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
    </div> -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      businessCategories: [
        "Restaurant",
        "Bar",
        "Coffee Shop",
        "Brewery",
        "Winery",
      ],
    };
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
