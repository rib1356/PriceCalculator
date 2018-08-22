import Vue from 'vue';
import Router from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css' ;

import TextReader from '@/components/TextReader';
import EditPage from '@/components/EditPage';

import TableComponent from 'vue-table-component';

Vue.use(TableComponent);

Vue.use(Router);
Vue.use(BootstrapVue);

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
    }
  ]
});
