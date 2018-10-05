// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import VeeValidate from 'vee-validate';

let config = {
  apiKey: "AIzaSyD84mR8U4ovC_raqYd6o_b9KDy3E8zQMks",
  authDomain: "ahills-price-calculator.firebaseapp.com",
  databaseURL: "https://ahills-price-calculator.firebaseio.com",
  projectId: "ahills-price-calculator",
  storageBucket: "ahills-price-calculator.appspot.com",
  messagingSenderId: "607541047201"
}; 
let app = firebase.initializeApp(config);

export const db = app.database();
export const gpmRef = db.ref('GPM');

Vue.use(VueFire);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
 });

//Used if the user needs to be redirect to the page they have logged into (Skips out sign up page but not needed for this project)
// firebase.auth().onAuthStateChanged(function(user) {
//   if(!app) {
//     /* eslint-disable no-new */
    
//   }
// });
// components: { App },
// template: '<App/>'
