import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import './assets/resources/themes/nova-light/theme.css';
import './assets/resources/primevue.min.css';
import './assets/resources/primeflex/primeflex.css';
import './assets/resources/primeicons/primeicons.css';
import './assets/layout/layout.scss';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
