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
        path:"/web/",
        name:"Home",
        component: Home
    },
    {
        path:"/web/admin",
        name:"Admin",
        component: Admin,
        meta:{
            rutaProtegida:true
        },
        children:[
            {
                path:"/web/muroGN10",
                name:"muroGN10",
                component: MuroGN10,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/nosotros",
                name:"nosotros",
                component: Nosotros,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/organigrama",
                name:"organigrama",
                component: Organigrama,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/servicioPersonal",
                name:"servicioPersonal",
                component: ServicioPersonal,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/desarrolloTalento",
                name:"desarrolloTalento",
                component: DesarrolloTalento,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/creceGN10",
                name:"creceGN10",
                component: Crece,
                meta:{
                    rutaProtegida:true
                },
            },
            {
                path:"/web/kiosco",
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

router.beforeEach((to,from,next)=>{
    console.log(to.meta.rutaProtegida)
    if(to.meta.rutaProtegida = false){
        // if(){
            
        //     next()
        // }else{
           
        //     next('/web/')
        // }
    }else{
        next()
    }
})

export default router
