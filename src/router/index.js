import Vue from 'vue';
import Router from 'vue-router';

//other
import VueHead from 'vue-head';
//Bootstap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css' ;
import { Navbar } from 'bootstrap-vue/es/components';
import { Nav } from 'bootstrap-vue/es/components';

//Components
import TextReader from '@/components/TextReader';
import EditPage from '@/components/EditPage';
import Admin from '@/components/Admin';
import FinalDisplayPage from '@/components/FinalDisplayPage';

//Table + CSS
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';

import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueGoodTablePlugin);
Vue.use(Router);
Vue.use(VueHead);
Vue.use(BootstrapVue);
Vue.use(Navbar);
Vue.use(Nav);

let router =  new Router({
  routes: [
    {
      path: '*', //If any path is wrong redirect to the first page
      redirect: '/'
    },
    {
      path: '/',
      name: 'TextReader',
      component: TextReader
    },
    {
      path: '/editPage',
      name: 'EditPage',
      component: EditPage
    },
    {
      path: '/finalPage',
      name: 'FinalDisplayPage',
      component: FinalDisplayPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

//This is only allowing people to move to admin because authenticated
router.beforeEach((to, from, next) => {

    let currentUser = firebase.auth().currentUser; //Get the current user from firebase if auth
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //To check if the route we need to go to requires "requiresAuth"

    if(requiresAuth && !currentUser) { //If the page requires authentication and user isnt logged in redirect
      alert("Please Sign in to access this page");
      next('/');
    } else if(requiresAuth && currentUser){ //If page requires authentication and users logged in continue to that page
      next();
    } else { //Otherwise allow for normal navigation
      next();
    }
});

export default router;
