<template>
    <b-container id="marca"  fluid   >
        <Buscador @buscarDesdeHijo="buscarImagenes"/>
        <b-row >
            <b-col id="tarejetaMuro" v-for="img in pixaImagenes" :key="img.id" class="p-4 my-2 bg-" cols="12">
                <Imagen :img="img"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mx-0 px-0">
                <Universidad/>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mx-0 px-0">
                <Formulario/>
            </b-col>
        </b-row>
         <b-row>
            <b-col class="mx-0 px-0">
                <Fundacion/>
            </b-col>
        </b-row>
        <b-row >
            <b-col class="mx-0 px-0">
                <Footer/>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
import ServicioAPI from "./ServiciosAPI";
import Imagen from "./Imagen";
import Buscador from "./Buscador";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
export default {
    name:"Pixabay",
    components:{
        Imagen,
        Buscador,
        Universidad,
        Formulario,
        Fundacion,
        Footer,
        
    },
    data(){
        return{
            pixaImagenes:[],
            buscarPixabay:""
        }
    },
    methods:{
        async buscarImagenes(buscar=""){
            this.buscarPixabay = buscar;
            const consulta = await ServicioAPI.getImagenes(this.buscarPixabay);
            this.pixaImagenes = consulta.hits.slice(0,5);
            console.log(consulta.hits);
        }
    },
    mounted(){
        this.buscarImagenes();
    }   

}
</script>


<style scoped>

#marca{
    background-image: url("../../assets/fondo.png");
     
}

@media only screen and (max-width: 992px){
    #tarejetaMuro{
        min-height: 40vh;
        max-height: 41vh;

    }
}


@media only screen and (min-width: 992px){
    #tarejetaMuro{
        min-height: 75vh;
        max-height: 76vh;

    }
}

</style>