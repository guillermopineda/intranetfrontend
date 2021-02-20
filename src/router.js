import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "./components/Home"
import MuroGN10 from "./components/muroGN10/MuroGN10"
import Nosotros from "./components/nosotros/Nosotros"
import Organigrama from "./components/organigrama/Organigrama"
import ServicioPersonal from "./components/servicioPersonal/ServicioPersonal"

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
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
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router