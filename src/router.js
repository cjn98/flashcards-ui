import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/user/Login.vue'
import Register from './components/user/Register.vue'
import Activate from './components/user/Activate.vue'
import Cards from './components/cards/Cards.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/activate/:id', component: Activate },
  { path: '/cards', component: Cards },
  { path: '/cards/:id', component: Home },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.use(VueRouter)


export default router

