import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Login = () => import( /* webpackChunkName:'login' */ '../views/Login.vue')
const Forget = () => import( /* webpackChunkName:'Forget' */ '../views/Forget.vue')
const Reg = () => import( /* webpackChunkName:'Reg' */ '../views/Reg.vue')
Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
]

const router = new VueRouter({
  routes
})

export default router
