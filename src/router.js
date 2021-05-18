import Vue from 'vue'
import VueRouter from "vue-router"
import Cookies from "js-cookie";

import Home from "./components/Home"
import Admin from "../src/Admin"
import Comunicados from "./components/comunicados/Comunicados"
import Bienestar from "./components/bienestar/Bienestar"
import FundacionM from "./components/fundacion/FundacionM"
import Muro from "./components/muro/Muro"
import Nosotros from "./components/nosotros/Nosotros"
import Organigrama from "./components/organigrama/Organigrama"
import Kiosco from "./components/kiosco/Kiosco"
import Crece from "./components/crece/Crece"
import Biblioteca from "./components/biblioteca/Biblioteca"

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/administrador",
        name:"Admin",
        component: Admin,
        meta:{
            requiresAuth:true
        },
        children:[
            {
                path:"/comunicados",
                name:"comunicados",
                component: Comunicados,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/bienestar",
                name:"bienestar",
                component: Bienestar,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/fundacion",
                name:"fundacion",
                component: FundacionM,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/muro",
                name:"muro",
                component: Muro,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/nosotros",
                name:"nosotros",
                component: Nosotros,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/organigrama",
                name:"organigrama",
                component: Organigrama,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/kiosco",
                name:"kiosco",
                component: Kiosco,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/creceGN10",
                name:"creceGN10",
                component: Crece,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/biblioteca",
                name:"biblioteca",
                component: Biblioteca,
                meta:{
                    requiresAuth:true
                },
            }
        ]
    },
    
]

const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes
})


router.beforeEach((to,from,next)=>{
    if(to.matched.some(route => route.meta.requiresAuth)){
        if(Cookies.get("login")==="true"){
            next()
        }else{
            next('/')
        }
    }else{
        
        if(Cookies.get("login")==="true"){
            next('/comunicados')
        }else{
            next()
        }
    }
})

export default router
