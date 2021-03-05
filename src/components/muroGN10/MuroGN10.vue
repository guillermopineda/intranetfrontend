<template>
    <b-container id="marca"  fluid   >
        <Buscador @buscarDesdeHijo="buscarImagenes"/>
        <b-row >
            <b-col id="tarejetaMuro" v-for="notaMuroFundacion in listaMuroFundacion" :key="notaMuroFundacion.id" class="p-4 my-2 bg-" cols="12">
                <ListaFundacion :notaMuroFundacion="notaMuroFundacion"/>
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
import ListaFundacion from "./ListaFundacion";
import ApiFundacion from "./ServiciosAPIFundacion"

import Hakunamatata from "./ServiciosAPI";
import Buscador from "./Buscador";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
export default {
    name:"MuroGN10",
    components:{

        Buscador,
        Universidad,
        Formulario,
        Fundacion,
        Footer,
        ListaFundacion,
        
    },
    data(){
        return{
            pixaImagenes:[],
            buscarPixabay:"",
            listaMuroFundacion : [],
        }
    },
    methods:{
        async buscarImagenes(busca="libros"){
            this.buscarPixabay = busca;
            const consulta = await Hakunamatata.getImagenes(this.buscarPixabay);
            this.pixaImagenes = consulta.hits.slice(0,5);
            console.log(consulta.hits);
        },
        async funcionListaFundacion(){
            const consultaListaFundacion = await ApiFundacion.getFundacion();
            this.listaMuroFundacion = consultaListaFundacion;
            console.log(consultaListaFundacion)
        }
    },
    mounted(){
        this.buscarImagenes();
        this.funcionListaFundacion();
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