<template>
  <div class="events-index">
    <div class="form-group">
      <input class="form-control" type="text" v-model="eventFilter" />
    </div>

    <h1>Events:</h1>
    <div v-for="event in filterBy(events, eventFilter)">
      <h3>{{ event.name }}</h3>
      <img :src="event.image" :alt="event.name" />
      <p>{{ event.formatted_date }} | {{ event.formatted_time }}</p>
      <p>Description: {{ event.description }}</p>
      <router-link :to="`/events/${event.id}`">More Info</router-link>
    </div>
    <div id="map"></div>
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
  data: function() {
    return {
      events: [],
      eventFilter: "",
    };
  },
  created: function() {
    axios.get("/api/events").then((response) => {
      console.log(response.data);
      this.events = response.data;
    });
  },
  mounted: function() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_WEB_TOKEN;
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-91.7857, 43.3033], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
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
