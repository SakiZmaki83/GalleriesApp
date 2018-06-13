import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [
    { path: '/login', component:Login, name:'login'},
    { path: '/register', component:Register, name:'register'}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router