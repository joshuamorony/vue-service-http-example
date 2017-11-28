// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
    'ion-app',
    'ion-header',
    'ion-navbar',
    'ion-title',
    'ion-content',
    'ion-button',
	'ion-list',
	'ion-item'
];

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})