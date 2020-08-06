<template>
  <div id="app">
    <body>
      <!-- START - Toparea -->
      <div  v-if="$route.path!=`/signup`" class="toparea animated">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <!-- <div class="toparea-details">
                <div class="toparea-item">
                  <i class="fa fa-envelope mr-2"></i>support@ecada.com
                </div>
                <div class="toparea-item">
                  <i class="fa fa-phone mr-2"></i>(0123)-123-456-789
                </div>
              </div> -->
            </div>
            <div class="col-12 pull-right">
              <div class="toparea-details">
                <div class="toparea-item" v-if="!isLoggedIn()">
                    <router-link to="/login"
                      >Login</router-link
                    >
                </div>
                <div class="toparea-item" v-if="!isLoggedIn()">
                    <router-link to="/signup"
                      >Signup</router-link
                    >
                </div>
                <div class="toparea-item" v-if="isLoggedIn()">
                    <router-link to="/logout"
                      >Logout</router-link
                    >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END - Toparea -->
      <nav v-if="$route.path!=`/signup`" class="navbar navbar-expand-lg navbar-dark megamenu">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>
           <!-- START - Navbar Brand -->
          <div class="navbar-header">
              <!-- <a class="navbar-brand logo" href="index.html">
                  <img src="img/themes/logo-orange.png" alt="Logo" />
              </a> -->
          </div>
          <!-- END - Navbar Brand -->

          <!-- START - Navbar Menu -->
          <div id="navbar-menu" class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
              <li>
                <router-link
                  v-if="isLoggedIn()"
                  :to="`/businesses/${getBusinessId()}`"
                  >My Business</router-link
                >
              </li>
              <li>
                <router-link to="/businesses">Businesses</router-link>
              </li>
              <li>
                <router-link to="/events">Events</router-link>
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
