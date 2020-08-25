import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Notifications from "vue-notification";
import JwPagination from "jw-vue-pagination";
import VueSimpleAlert from "vue-simple-alert";

Vue.config.productionTip = false;
Vue.component("jw-pagination", JwPagination);
Vue.use(VueSimpleAlert);

Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
