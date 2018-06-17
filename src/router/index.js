import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import GalleriesApp from '../pages/GalleriesApp.vue'
import CreateGallery from "../components/CreateGallery.vue"
import SingleGallery from '../pages/SingleGallery.vue'
import Author from '../pages/Author.vue'
import MyGalleries from '../pages/MyGalleries.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect:'/galleries', name:'home'},
    { path: '/login', component:Login, name:'login'},
    { path: '/register', component:Register, name:'register'},
    { path: '/galleries', component: GalleriesApp, name: 'galleries'},
    { path: '/create', component: CreateGallery, name:'create-gallery'},
    { path: '/galleries/:id', component:SingleGallery, name:'gallery' },
    { path: '/authors/:id', component:Author, name: 'author'},
    { path: '/mygalleries', component:MyGalleries, name: 'my-galleries' } 

    
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router