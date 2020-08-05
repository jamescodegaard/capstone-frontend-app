<template>
  <div class="login">
    <div class="login-3">
      <div class="container-fluid padding-clear">
        <div class="login-bg2"></div>

        <div class="login-content">
          <!-- <h1 class="text-center margin-bottom-25">
            <a href="index.html" class="logo">
              <img src="img/themes/logo-orange.png" alt="Logo" />
            </a>
          </h1> -->

          <p class="login-slogan text-center">Sign in to DecorahDoings</p>
          <form v-on:submit.prevent="submit()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter E-mail"
                v-model="email"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>

            <button class="btn-e btn-e-primary pull-right" type="submit">
              Log In
            </button>
            <div class="clearfix"></div>

            <div class="text-center">
              <p class="margin-top-15 mb-3">
                <router-link to="/signup" href="javascript:void(0);"
                  >Don't have account? Sign up here!</router-link
                >
              </p>
              <p>DecorahDoings © 2020</p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("business_id", response.data.business_id);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
