import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

Vue.use(Datetime);
Vue.component("datetime", Datetime);

new Vue({
  router,
  render: (h) => h(App),
  watch: {
    $route: function() {
      window.location.reload();
    },
  },
}).$mount("#app");
