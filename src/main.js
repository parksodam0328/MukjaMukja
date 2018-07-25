// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip = false
Vue.use(VueGoogleMaps,{
  load: {
    key: 'AIzaSyCOKjMXYZDNeNhC3cC6kFY6w9kgTgg3ehE',
    libraries: 'places'
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
