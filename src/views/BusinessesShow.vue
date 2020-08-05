<template>
  <div class="businesses-show">
    
    <!-- START - Inner Head -->
    <!-- <div class="inner-head">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <i class="fa fa-users"></i>
                    <h4>Theme <span>Pages</span></h4>
                    <ol class="breadcrumb">
                        <li><a href="javascript:void(0);">Pages</a></li>
                        <li class="active">About Us</li>
                    </ol>
                </div>
            </div>
        </div>
    </div> -->
    <!-- END - Inner Head -->

    <!-- START - Half Contain Wrapp -->
    <div class="container-fluid">
        <div class="half-column-row">
            <div class="half-column-wrapp">
                <div class="half-column">
                    <img :src="business.image" class="img-fluid" :alt="business.name" />
                </div>
                <div class="half-column column-content">
                    <h3>{{business.name}}</h3>
                    <p>Address: {{ business.address }}</p>
                    <p>Email: {{ business.email }}</p>
                    <p>Phone: {{ business.phone }}</p>
                    <p>Description: {{ business.description }}</p>
                    <p>Website: {{ business.website }}</p>
                    <p>Hours: {{ business.hours }}</p>
                    <router-link v-if="$parent.getBusinessId() == business.id" :to="`/businesses/${this.business.id}/edit`">Edit Business</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- END - Half Contain Wrapp -->

    <!-- START - Contain Wrapp -->
    <div class="contain-wrapp padding-bottom-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8">
                    <div class="section-heading">
                        <h3>Events</h3>
                        <i class="fa fa-trophy"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div id="team" class="owl-carousel leftControls-right">
                      <div v-for="event in events">
                        <div class="item">
                            <div class="thumbnail team-wrapp">
                                <div class="img-wrapper">
                                    <div class="img-caption ecadaZoomIn">
                                        <div class="team-network">
                                            <a href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                            <a href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                            <a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <img :src="event.image" class="img-fluid" alt="" />
                                </div>
                                <div class="caption">
                                    <h5>J{{ event.name }}</h5>
                                    <span class="team-position">{{ event.formatted_date }} || {{ event.formatted_time }}</span>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END - Contain Wrapp -->

    <div class="clearfix"></div>

    <!-- Start cta primary -->
    <div class="cta-wrapper cta-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>We are hiring, be part of our team !</h5>
                    <p>Phasellus vit ae ipsum ex. Etiam eu vestibulum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero libero, imperdiet fringilla.</p>
                    <a class="btn-e btn-gray btn-icon" href="javascript:void(0);">Join now <i class="fa fa-send-o"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- End cta primary -->

    <!-- original business info -->
    <!-- <div> 
      <h1>{{ business.name }}</h1>
      <img :src="business.image" :alt="business.name">
      <p>Address: {{ business.address }}</p>
      <p>Email: {{ business.email }}</p>
      <p>Phone: {{ business.phone }}</p>
      <p>Description: {{ business.description }}</p>
      <p>Website: {{ business.website }}</p>
      <p>Hours: {{ business.hours }}</p>
      <router-link v-if="$parent.getBusinessId() == business.id" :to="`/businesses/${this.business.id}/edit`">Edit Business</router-link>
    </div> -->

    <!-- original business events index-->
    <div> 
      <h2>Events:</h2>
      <div v-for="event in events"> 
        <h3>{{ event.name }}</h3>
        <p>{{ event.formatted_date }}</p>
        <p>{{ event.formatted_time }}</p>
        <p>{{ event.description }} </p>
        <p>Contact: {{ event.alt_contact }} </p>
        <p>Email: {{ event.alt_email }} </p>
        <router-link v-if="$parent.getBusinessId() == business.id" :to="`/events/${event.id}/edit`">Edit Event</router-link>
      </div>
      <router-link v-if="$parent.getBusinessId() == business.id" :to="`/events/new`">New Event</router-link>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      business: {},
      events: [],
    };
  },
  created: function () {
    axios.get(`/api/businesses/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.business = response.data;
      this.events = response.data.events;
    });
  },
  methods: {},
};
</script>