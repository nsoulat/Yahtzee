import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jeu from '../views/Jeu.vue'

Vue.use(VueRouter)
 
const routes = [
  {
    path: '/jeu',
    name: 'Jeu',
    component: Jeu
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
