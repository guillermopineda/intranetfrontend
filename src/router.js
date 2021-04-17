import Vue from 'vue'
import VueRouter from "vue-router"
import Cookies from "js-cookie";

import Home from "./components/Home"
import Admin from "../src/Admin"
import MuroGN10 from "./components/muroGN10/MuroGN10"
import Nosotros from "./components/nosotros/Nosotros"
import Organigrama from "./components/organigrama/Organigrama"
import ServicioPersonal from "./components/servicioPersonal/ServicioPersonal"
import DesarrolloTalento from "./components/desarrollo/DesarrolloTalento"
import Crece from "./components/crece/Crece"
import Kiosco from "./components/kiosco/Kiosco"

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
                path:"/muroGN10",
                name:"muroGN10",
                component: MuroGN10,
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
                path:"/servicioPersonal",
                name:"servicioPersonal",
                component: ServicioPersonal,
                meta:{
                    requiresAuth:true
                },
            },
            {
                path:"/desarrolloTalento",
                name:"desarrolloTalento",
                component: DesarrolloTalento,
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
                path:"/kiosco",
                name:"kiosco",
                component: Kiosco,
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
    console.log(Cookies.get("login"));
    console.log(Cookies.get("token"));
    if(to.matched.some(route => route.meta.requiresAuth)){
        if(Cookies.get("login")==="true"){
            next()
        }else{
            next('/')
        }
    }else{
        
        if(Cookies.get("login")==="true"){
            next('/muroGN10')
        }else{
            next()
        }
    }
})

export default router
