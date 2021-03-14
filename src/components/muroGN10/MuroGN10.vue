<template>
  <b-container id="marca" fluid>
    <!-- <Buscador @buscarDesdeHijo="buscarImagenes"/> -->
    <BotonesMuro @buscarMuro="actualizarMuro" />

    <template v-if="this.servicio === ''">
      <b-row>
        <b-col
          id="tarejetaMuro"
          v-for="comunicado in comunicados"
          :key="comunicado.id"
          class="p-4 my-2 bg-"
          cols="12"
        >
          <ListaComunicado :comunicado="comunicado" />
        </b-col>
      </b-row>
    </template>

    <template
      v-else-if="
        this.servicio === 'fundacion/' ||
        this.servicio === 'bienestar/' ||
        this.servicio === 'informativo/'
      "
    >
      <b-row>
        <b-col
          id="tarejetaMuro"
          v-for="comunicadoMuro in comunicadosMuro"
          :key="comunicadoMuro.id"
          class="p-4 my-2"
          cols="12"
        >
          <ListaMuro :comunicadoMuro="comunicadoMuro" />
        </b-col>
      </b-row>
    </template>

    <b-row>
      <b-col class="mx-0 px-0">
        <Universidad />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mx-0 px-0">
        <Formulario />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mx-0 px-0">
        <Fundacion />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import ListaMuro from "./ListaMuro";
import ListaComunicado from "./ListaComunicado";
import gnService from "./gnService";

import Hakunamatata from "./ServiciosAPIDemo";
import BotonesMuro from "./BotonesMuro";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
export default {
  name: "MuroGN10",
  components: {
    BotonesMuro,
    Universidad,
    Formulario,
    Fundacion,
    Footer,
    ListaMuro,
    ListaComunicado,
  },
  data() {
    return {
      pixaImagenes: [],
      buscarPixabay: "",
      comunicadosMuro: [],
      comunicados: [],
      servicio: "",
    };
  },

  methods: {
    async buscarImagenes(busca = "libros") {
      this.buscarPixabay = busca;
      const consulta = await Hakunamatata.getImagenes(this.buscarPixabay);
      this.pixaImagenes = consulta.hits.slice(0, 5);
      console.log(consulta.hits);
    },
    actualizarMuro(servicio) {
      this.servicio = servicio;

      if (servicio === "") {
        gnService
          .getMuro()
          .then(
            (comunicados) => (this.comunicados = comunicados.data.slice(0, 5))
          );
      } else {
        gnService
          .getMuro(servicio)
          .then(
            (comunicadosMuro) =>
              (this.comunicadosMuro = comunicadosMuro.data.slice(0, 5))
          );
      }
    },
  },

  watch: {
    servicio: {
      deep: true,
      handler: "actualizarMuro",
    },
  },

  mounted() {
    gnService
      .getMuro()
      .then((comunicados) => (this.comunicados = comunicados.data.slice(0, 5)));

    //     gnService
    //       .getMuro(this.servicio)
    //       .then(
    //         (comunicadosMuro) =>
    //           (this.comunicadosMuro = comunicadosMuro.data.slice(0, 5))
    //       );
  },
  //   mounted() {
  //

  //     //this.buscarImagenes();
  //     //this.fundacion();
  //   },
};
</script>


<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
}

@media only screen and (max-width: 992px) {
  #tarejetaMuro {
    min-height: 40vh;
    max-height: 41vh;
  }
}

@media only screen and (min-width: 992px) {
  #tarejetaMuro {
    min-height: 75vh;
    max-height: 76vh;
  }
}
</style>