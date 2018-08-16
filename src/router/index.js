import Vue from 'vue'
import Router from 'vue-router'
import TextReader from '@/components/TextReader'
import EditPage from '@/components/EditPage'

Vue.use(Router)

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
})
