<template>
  <div class="events-index">
    <div class="contain-wrapp">
      <div class="container">
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Search Events" v-model="eventFilter" />
        </div>
        <h1>Events:</h1>
        <!-- START - Events Gallery -->
        <div class="row">
          <div class="col-12 col-lg-4 col-xl-6" v-for="event in filterBy(events, eventFilter)">
            <div class="thumbnail team-wrapp thumbnail-green">
              <div class="img-wrapper">
                <div class="img-caption ecadaZoomIn">
                  <div class="team-network">
                    <router-link :to="`/events/${event.id}`"
                      ><i class="fa fa-arrow-right"></i
                    ></router-link>
                    <p>More Info</p>
                  </div>
                </div>
                <img :src="event.image" class="img-fluid" alt="" />
              </div>
              <div class="caption">
                <h5>{{ event.name }}</h5>
                <span class="team-position"
                  >{{ event.formatted_date }} |
                  {{ event.formatted_time }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<style>
/* wet code - same map css on business index could go elsewhere? */
#map {
  top: 0;
  bottom: 0;
  height: 500px;
  width: 100%;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      events: [],
      eventFilter: "",
    };
  },
  created: function () {
    axios.get("/api/events").then((response) => {
      console.log(response.data);
      this.events = response.data;
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
      this.events.forEach((event) => {
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<p>${event.name}</p>
          <small>${event.business.name}: ${event.business.address}</small>`
        );
        var marker = new mapboxgl.Marker()
          .setLngLat([event.business.longitude, event.business.latitude])
          .setPopup(popup)
          .addTo(map); // add the marker to the map
      });
    });
  },
  methods: {},
};
</script>
