<template>
  <div class="signup">
    <div class="register-3">
      <div class="container-fluid padding-clear">
        <div class="register-bg2"></div>

        <div class="register-content">
          <h1 class="text-center margin-bottom-25">
            <!-- <a href="index.html" class="logo">
                    <img src="img/themes/logo-orange.png" alt="Logo" />
                </a> -->
          </h1>

          <p class="register-slogan text-center">Register Your Business</p>
          <form v-on:submit.prevent="submit()">
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="name" />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="form-group">
              <label>Password Confirmation:</label>
              <input
                type="password"
                class="form-control"
                v-model="passwordConfirmation"
              />
            </div>
            <div class="form-group">
              <label>Address:</label>
              <input type="text" class="form-control" v-model="address" />
            </div>
            <div class="form-group">
              <label>Phone:</label>
              <input type="text" class="form-control" v-model="phone" />
            </div>
            <div class="form-group">
              <label>Website:</label>
              <input type="text" class="form-control" v-model="website" />
            </div>
            <div class="form-group">
              <label>Category</label>
              <select class="form-control" v-model="category">
                <option v-for="category in $parent.businessCategories">{{
                  category
                }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Description:</label>
              <input type="text" class="form-control" v-model="description" />
            </div>
            <div class="form-group">
              <label>Hours:</label>
              <textarea class="form-control" rows="3"
                v-model="hours"
                placeholder="M-F: 10AM-8PM"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Image URL:</label>
              <input type="text" class="form-control" v-model="image" />
            </div>

            <button class="btn-e btn-e-primary pull-right" type="submit">
              Sign Up
            </button>
            <div class="clearfix"></div>
          </form>

          <div class="text-center">
            <p class="margin-top-15 mb-3">
              <router-link to="/login" href="javascript:void(0);"
                >Already have account?</router-link
              >
            </p>
            <small>DecorahDoings © 2020</small>
          </div>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <div class="form-group">
        <label>Address:</label>
        <input type="text" class="form-control" v-model="address" />
      </div>
      <div class="form-group">
        <label>Phone:</label>
        <input type="text" class="form-control" v-model="phone" />
      </div>
      <div class="form-group">
        <label>Website:</label>
        <input type="text" class="form-control" v-model="website" />
      </div>
      <div class="form-group">
        <label>Category</label>
        <select class="form-control" v-model="category">
          <option v-for="category in $parent.businessCategories">{{
            category
          }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="description" />
      </div>
      <div class="form-group">
        <label>Hours:</label>
        <textarea v-model="hours" placeholder="M-F: 10AM-8PM"></textarea>
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      address: "",
      phone: "",
      website: "",
      category: "",
      description: "",
      hours: "",
      image: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        address: this.address,
        phone: this.phone,
        website: this.website,
        category: this.category,
        description: this.description,
        hours: this.hours,
        image: this.image,
      };
      axios
        .post("/api/businesses", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
