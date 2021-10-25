import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jeu from '../views/Jeu.vue'
import Regles from '../views/Regles.vue'
import Scores from '../views/Scores.vue'

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
    },
    {
        path: '/regles',
        name: 'Regles',
        component: Regles
    },
    {
        path: '/scores',
        name: 'Scores',
        component: Scores
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
