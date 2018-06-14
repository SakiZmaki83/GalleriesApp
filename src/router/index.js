import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login'
import Register from '../pages/Register'
import GalleriesApp from '../pages/GalleriesApp'
import CreateGallery from "../components/CreateGallery";
import SingleGallery from '../pages/SingleGallery'


Vue.use(VueRouter)

const routes = [
    { path: '/login', component:Login, name:'login'},
    { path: '/register', component:Register, name:'register'},
    { path: '/galleries', component: GalleriesApp, name: 'galleries'},
    { path: '/create', component: CreateGallery, name:'create-gallery'},
    { path: '/gallery/:id', component:SingleGallery, name:'single-gallery' },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router