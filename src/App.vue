<template>
  <div id="app">
    <body>
      <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div id="navbar-menu" class="collapse navbar-collapse">
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
    <footer>
      <a href="javascript:void(0);" class="toTop">
            <i class="fa fa-chevron-up"></i>
      </a>
    </footer>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
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
  created: function () {},
  mounted: function () {},
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getBusinessId: function () {
      return localStorage.getItem("business_id");
    },
  },
};
</script>
