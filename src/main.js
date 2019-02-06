import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import datePicker from 'vue-bootstrap-datetimepicker';

// http request
// var VueResource = require('vue-resource');
// Vue.prototype.$http = VueResource;  
// Vue.use(VueResource);
// Vue.http.options.emulateJSON = true
Vue.use(BootstrapVue);
Vue.use(datePicker);
// const http=Vue.http
// export default http
// let axios = require('axios');
// Vue.prototype.$http = axios;  
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");


// Vue.http.options.emulateJSON = true;