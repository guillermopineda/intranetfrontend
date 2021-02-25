<template>
    <b-container id="marca"  fluid   >
        <Buscador @buscarDesdeHijo="buscarImagenes"/>
        <b-row >
            <b-col id="tarejetaMuro" v-for="io in pixaImagenes" :key="io.id" class="p-4 my-2 bg-" cols="12">
                <Imagen :io="io"/>
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
         <b-row >
            <b-col id="tarejetaMuro" v-for="nota in listaComunicados" :key="nota.beneficio.id" class="p-4 my-2 bg-" cols="12">
                <Comunicados24 :nota="nota"/>
            </b-col>
        </b-row>


    </b-container>
</template>


<script>
import Comunicados24 from "./Comunicados";
import Goku from "./ServiciosAPICapital24"

import Hakunamatata from "./ServiciosAPI";
import Imagen from "./Imagen";
import Buscador from "./Buscador";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
export default {
    name:"MuroGN10",
    components:{
        Imagen,
        Buscador,
        Universidad,
        Formulario,
        Fundacion,
        Footer,
        Comunicados24,
        
    },
    data(){
        return{
            pixaImagenes:[],
            buscarPixabay:"",
            listaComunicados : [],
        }
    },
    methods:{
        async buscarImagenes(busca="libros"){
            this.buscarPixabay = busca;
            const consulta = await Hakunamatata.getImagenes(this.buscarPixabay);
            this.pixaImagenes = consulta.hits.slice(0,5);
            console.log(consulta.hits);
        },
        async funcionComunicado(){
            const consulta24 = await Goku.getComunicados();
            this.listaComunicados = consulta24;
            console.log(consulta24)
        }
    },
    mounted(){
        this.buscarImagenes();
        this.funcionComunicado();
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