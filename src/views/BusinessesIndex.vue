<template>
  <div class="businesses-index">
    <div class="section-header section-gray">
      <div class="container">
        <h1>Businesses:</h1>
        <div class="container">
          <!-- START - Business Gallery -->
          <div class="row">
            <div class="col-12 col-lg-6 col-xl-4" v-for="business in businesses">
              <div class="thumbnail team-wrapp">
                <div class="img-wrapper">
                  <div class="img-caption ecadaZoomIn">
                    <div class="team-network">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                  <img :src="business.image" class="img-responsive" alt="" />
                </div>
                <div class="caption">
                  <h5>{{ business.name }}</h5>
                </div>
              </div>
            </div>
            
              <!-- <router-link :to="`/businesses/${business.id}`" class="demo-card">
                <div class="demo-card-image demo-card-loading">
                  <img
                    :src="business.image"
                    class="img-fluid"
                    alt="Demo header"
                  />
                  <img
                    data-src="assets/img/page_home1.png"
                    class="img-fluid hqy-lazy"
                    alt="Home Default"
                  />
                </div>
                <h5 class="demo-card-title">{{ business.name }}</h5>
              </router-link> -->
            </div>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<style>
#map {
  top: 0;
  bottom: 0;
  height: 500px;
  width: 100%;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      businesses: [],
    };
  },
  created: function () {
    axios.get("/api/businesses").then((response) => {
      console.log(response.data);
      this.businesses = response.data;
    });
  },
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_WEB_TOKEN;
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-91.7857, 43.3033], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
    map.setStyle("mapbox://styles/mapbox/dark-v10");
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");
    map.on("load", () => {
      this.businesses.forEach((business) => {
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<p>${business.name}</p>
          <small>${business.address}</small>`
        );
        var marker = new mapboxgl.Marker()
          .setLngLat([business.longitude, business.latitude])
          .setPopup(popup)
          .addTo(map); // add the marker to the map
      });
    });
  },
  methods: {},
};
</script>
