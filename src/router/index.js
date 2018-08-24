import Vue from 'vue';
import Router from 'vue-router';

//Bootstap
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css' ;
import { Navbar } from 'bootstrap-vue/es/components';
import { Nav } from 'bootstrap-vue/es/components';

//Components
import TextReader from '@/components/TextReader';
import EditPage from '@/components/EditPage';
import About from '@/components/About';

//Table
import VueGoodTablePlugin from 'vue-good-table';

//Table CSS 
import 'vue-good-table/dist/vue-good-table.css';

Vue.use(VueGoodTablePlugin);
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(Navbar);
Vue.use(Nav);

export default new Router({
  routes: [
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
      path: '/about',
      name: 'About',
      component: About
    },
  ]
});
