import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regin from '../views/Regin.vue'
import Detail from '../views/Detail.vue'
import Update from '../views/Update.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regin',
    component: Regin
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/update/:id',
    component: Update
  },
  {
    path: '/create',
    component: Create
  }
]

const router = new VueRouter({
  routes
})

export default router
