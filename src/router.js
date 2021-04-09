import Vue from 'vue'
import VueRouter from "vue-router"

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
            rutaProtegida:true
        },
        children:[
            {
                path:"/muroGN10",
                name:"muroGN10",
                component: MuroGN10,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/nosotros",
                name:"nosotros",
                component: Nosotros,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/organigrama",
                name:"organigrama",
                component: Organigrama,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/servicioPersonal",
                name:"servicioPersonal",
                component: ServicioPersonal,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/desarrolloTalento",
                name:"desarrolloTalento",
                component: DesarrolloTalento,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/creceGN10",
                name:"creceGN10",
                component: Crece,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/kiosco",
                name:"kiosco",
                component: Kiosco,
                meta:{
                    rutaProtegida:true
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


export default router
