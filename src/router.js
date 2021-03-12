import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/activate/:id', component: Home },
  { path: '/cards', component: Home },
  { path: '/cards/:id', component: Home },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.use(VueRouter)


export default router

