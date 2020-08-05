<template>
  <div id="app">
    <!-- START - Toparea -->
    <div class="toparea animated">
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
          <div class="col-12 col-lg-6 text-lg-right">
            <div class="toparea-details toparea-social">
              <a href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
              <a href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
              <a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a>
              <a href="javascript:void(0);"><i class="fa fa-instagram"></i></a>
            </div>
            <div class="toparea-details">
              <div class="toparea-item dropdown">
                <a
                  href="javascript:void(0);"
                  id="topareaLanguage"
                  class="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  ><i class="fa fa-globe mr-2"></i>Languages</a
                >
                <div class="dropdown-menu" aria-labelledby="topareaLanguage">
                  <a href="javascript:void(0);" class="dropdown-item"
                    >English<i class="fa fa-check ml-2"></i
                  ></a>
                  <a href="javascript:void(0);" class="dropdown-item"
                    >Spanish</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item"
                    >Russian</a
                  >
                  <a href="javascript:void(0);" class="dropdown-item">German</a>
                </div>
              </div>
              <div class="toparea-item"><a href="page_faq.html">Help</a></div>
              <div class="toparea-item">
                <a href="page_login.html">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END - Toparea -->
    <body>
      <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
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
          <div id="navbar-menu" class="collapse navbar-collapse">
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav ml-auto">
                <li class="tab-nav">
                  <router-link to="/businesses">Businesses</router-link>
                </li>
                <li class="tab-nav">
                  <router-link to="/events">Events</router-link>
                </li>
                <li class="tab-nav">
                  <router-link
                    v-if="isLoggedIn()"
                    :to="`/businesses/${getBusinessId()}`"
                    >My Info</router-link
                  >
                </li>
                <li class="tab-nav">
                  <router-link v-if="!isLoggedIn()" to="/signup"
                    >Signup</router-link
                  >
                </li>
                <li class="tab-nav">
                  <router-link v-if="!isLoggedIn()" to="/login"
                    >Login</router-link
                  >
                </li>
                <li class="tab-nav">
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
  mounted: function() {},
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
