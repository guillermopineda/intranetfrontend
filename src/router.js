import Vue from 'vue'
import VueRouter from "vue-router"

import Home from "./components/Home"
import Pixabay from "./components/pixabay/Pixabay"
import Nosotros from "./components/nosotros/Nosotros"
import Organigrama from "./components/organigrama/Organigrama"

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/pixa",
        name:"pixa",
        component: Pixabay
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
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router