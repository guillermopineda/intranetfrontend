<template>
  <b-container id="marca" fluid>
    <!-- <Buscador @buscarDesdeHijo="buscarImagenes"/> -->
    <BotonesMuro @buscarMuro="actualizarMuro" />

    <template v-if="this.loading">
      <Loading />
    </template>

    <template v-else>
      <template v-if="errored">
        <Errored />
      </template>

      <template v-else>
        <template v-if="this.servicio === ''">
          <b-row>
            <b-col
              v-for="comunicado in comunicados"
              :key="comunicado.id"
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
              
              v-for="comunicadoMuro in comunicadosMuro"
              :key="comunicadoMuro.id"
              class="mb-4 rounded tarjetaComunicado"
              cols="12"
            >
              <ListaMuro :comunicadoMuro="comunicadoMuro" />
            </b-col>
          </b-row>
        </template>

        <div v-if="comunicadosMuroLargo === 0 && this.loaded " id="pol">
          <Noinfo />
        </div>

        <div
          v-if="comunicadosLargo===0 "
          id="pol"
        >
          <Noinfo />
        </div>
      </template>
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
import gnService from "@/services/muro/gnService";
import BotonesMuro from "./BotonesMuro";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
import Errored from "../Errored";
import Noinfo from "../Noinfo";
import Loading from "../Loading";
export default {
  name: "MuroGN10",
  components: {
    BotonesMuro,
    Universidad,
    Formulario,
    Fundacion,
    Footer,
    Errored,
    ListaMuro,
    ListaComunicado,
    Noinfo,
    Loading,
  },
  data() {
    return {
      comunicadosMuro: [],
      comunicados: [],
      servicio: "",
      loaded: false,
      loading: false,
      errored: false,
    };
  },

  methods: {
    actualizarMuro(servicio) {
      this.servicio = servicio;
      this.loading = true;
      this.loaded = false;

      if (servicio === "") {
        gnService
          .getMuro()
          .then(
            (comunicados) => (this.comunicados = comunicados.data.slice(0, 5))
          )
          .catch((error) => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => setTimeout(() => (this.loading = false), 1000));
        this.loaded = false;
      } else {
        gnService
          .getMuro(servicio)
          .then(
            (comunicadosMuro) =>
              (this.comunicadosMuro = comunicadosMuro.data.slice(0, 5))
          )
          .catch((error) => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => setTimeout(() => (this.loading = false), 1000));
        this.loaded = true;
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
    this.loading = true;
     gnService
      .getMuro()
      .then((comunicados) => (this.comunicados = comunicados.data.slice(0, 5)))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => setTimeout(() => (this.loading = false), 1000));
      
  },
  
  computed: {
  comunicadosLargo () {
    return this.comunicados.length
  },
  comunicadosMuroLargo () {
    return this.comunicadosMuro.length
  }
}
};
</script>


<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  margin-top: 8rem;
}

.tarjetaComunicado{
    background-color:#ffffff;
    height: 35rem;
    margin: 0;
    padding: 0;
}

.tarjetaComunicado:focus {
  background-color: #fcfcfc;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}
.tarjetaComunicado:hover {
  background-color: #fcfcfc;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

@media only screen and (max-width: 992px) {

  .tarjetaComunicado {
  height: 23rem;
}
}

@media only screen and (max-width: 576px) {
  .tarjetaComunicado {
  height: 12rem;
}
}



</style>