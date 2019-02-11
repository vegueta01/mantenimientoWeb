import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import datePicker from 'vue-bootstrap-datetimepicker';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.use(BootstrapVue);
Vue.use(datePicker);
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