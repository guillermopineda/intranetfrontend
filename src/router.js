import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "./components/Home"
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
        path:"/web",
        name:"Home",
        component: Home
    },
    {
        path:"/muroGN10",
        name:"muroGN10",
        component: MuroGN10
    },
    {
        path:"/nosotros",
        name:"nosotros",
        component: Nosotros
    },
    {
        path:"/organigrama",
        name:"organigrama",
        component: Organigrama
    },
    {
        path:"/servicioPersonal",
        name:"servicioPersonal",
        component: ServicioPersonal
    },
    {
        path:"/desarrolloTalento",
        name:"desarrolloTalento",
        component: DesarrolloTalento
    },
    {
        path:"/creceGN10",
        name:"creceGN10",
        component: Crece
    },
    {
        path:"/kiosco",
        name:"kiosco",
        component: Kiosco
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router