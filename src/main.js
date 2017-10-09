// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import router from './router.js'
import App from './App'

// CSS imports
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-icons/css/material-icons.css';
import 'vue-material/dist/vue-material.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.config.productionTip = false

import { store } from './vuex/store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
