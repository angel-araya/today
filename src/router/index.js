import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './../components/LoginPage.vue'
import InputArea from './../components/InputArea.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/new',
      name: 'New Entry',
      component: InputArea,
    },
  ],
})
