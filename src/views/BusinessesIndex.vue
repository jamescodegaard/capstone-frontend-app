<template>
  <div class="businesses-index">
    <div class="inner-head">
      <div class="container">
        <div class="row"></div>
      </div>
    </div>
    <div class="contain-wrapp padding-clear padding-bottom-30">
      <div class="container">
        <h1>Local Businesses:</h1>
        <!-- START - Business Gallery -->
        <div id="gallery" class="masonry gallery">
          <div class="row">
            <div class="col-12">
              <div
                class="grid-item col-x12 col-md-4"
                v-for="business in businesses"
              >
                <div class="thumbnail team-wrapp thumbnail-green">
                  <div class="img-wrapper">
                    <div class="img-caption ecadaZoomIn">
                      <div class="team-network">
                        <router-link :to="`/businesses/${business.id}`"
                          ><i class="fa fa-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                    <img :src="business.image" class="img-responsive" alt="" />
                  </div>
                  <div class="caption">
                    <h5>{{ business.name }}</h5>
                    <p>{{ business.phone }}</p>
                  </div>
                </div>
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
  data: function() {
    return {
      businesses: [],
    };
  },
  created: function() {
    axios.get("/api/businesses").then((response) => {
      console.log(response.data);
      this.businesses = response.data;
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
    ".img-wrapper".each(function() {
      var eZoomIn = (".ecadaZoomIn", this),
        eZoomInDown = (".ecadaZoomInDown", this);
      ".img-caption".addClass("animated");
      eZoomIn.addClass("zoomOut");
      eZoomInDown.addClass("zoomOutDown");
      this.on("mouseenter", function() {
        eZoomIn.addClass("zoomIn").removeClass("zoomOut");
        eZoomInDown.addClass("zoomInDown").removeClass("zoomOutDown");
        this.addClass("on");
        return false;
      });
      this.on("mouseleave", function() {
        eZoomIn.addClass("zoomOut").removeClass("zoomIn");
        eZoomInDown.addClass("zoomOutDown").removeClass("zoomInDown");
        this.removeClass("on");
        return false;
      });
    });
    //
  },
  methods: {},
};
</script>
