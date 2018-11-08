// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

let config = {
  apiKey: "AIzaSyCRXFpzy_uHle6dNPPXDgOpJpLgUYyC6mQ",
  authDomain: "vue-dashboard-login.firebaseapp.com",
  databaseURL: "https://vue-dashboard-login.firebaseio.com",
  projectId: "vue-dashboard-login",
  storageBucket: "vue-dashboard-login.appspot.com",
  messagingSenderId: "760313318831"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
