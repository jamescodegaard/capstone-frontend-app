<template>
  <div class="businesses-edit">
    <div class="contain-wrapp">
        <div class="parallax bg-decorah">
          <div class="parallax-container padding-clear">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                  <div class="form-wrapper dark-bg">
                    <form v-on:submit.prevent="editBusiness(business)">
                      <h2>Update Info</h2>
                      <ul>
                        <li class="text-danger" v-for="error in errors">
                          {{ error }}
                        </li>
                      </ul>
                      <div class="wrap-form">
                        <div class="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="business.name"
                          />
                        </div>
                        <div class="form-group">
                          <label>Email:</label>
                          <input
                            type="email"
                            class="form-control"
                            v-model="business.email"
                          />
                        </div>
                        <div class="form-group">
                          <label>Address:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="business.address"
                          />
                        </div>
                        <div class="form-group">
                          <label>Phone:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="business.phone"
                          />
                        </div>
                        <div class="form-group">
                          <label>Website:</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="business.website"
                          />
                        </div>
                        <div class="form-group">
                          <label>Category</label>
                          <select
                            class="form-control"
                            v-model="business.category"
                          >
                            <option
                              v-for="category in $parent.businessCategories"
                              >{{ category }}</option
                            >
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Description:</label>
                          <textarea
                            class="form-control"
                            rows="3"
                            v-model="business.description"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <label>Hours:</label>
                          <textarea
                            class="form-control"
                            rows="3"
                            v-model="business.hours"
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Image URL:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="business.image"
                        />
                      </div>
                      <input
                        type="submit"
                        class="btn btn-e-primary"
                        value="Update"
                      />
                      <input
                        type="button"
                        class="btn btn-e-dark-red pull-right"
                        value="Delete"
                        v-on:click="destroyBusiness(business)"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      business: [],
      errors: [],
    };
  },
  created: function () {
    axios.get(`/api/businesses/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.business = response.data;
    });
  },
  methods: {
    editBusiness: function (business) {
      var params = {
        name: business.name,
        email: business.email,
        address: business.address,
        phone: business.phone,
        website: business.website,
        category: business.category,
        description: business.description,
        hours: business.hours,
        image: business.image,
      };
      axios
        .patch(`/api/businesses/${this.business.id}`, params)
        .then((response) => {
          console.log("Updated Business:", response.data);
          this.$router.push(`/businesses/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    destroyBusiness: function (business) {
      axios.delete(`/api/businesses/${business.id}`).then((response) => {
        console.log("Business successfully destroyed!");
        this.$router.push("/");
      });
    },
  },
};
</script>
