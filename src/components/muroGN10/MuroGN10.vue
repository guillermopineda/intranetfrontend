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
              id="tarjetaMuro"
              v-for="comunicado in comunicados"
              :key="comunicado.id"
              class="p-4 my-2"
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
              id="tarjetaMuro"
              v-for="comunicadoMuro in comunicadosMuro"
              :key="comunicadoMuro.id"
              class="p-4 my-2"
              cols="12"
            >
              <ListaMuro :comunicadoMuro="comunicadoMuro" />
            </b-col>
          </b-row>
        </template>

        <div v-if="comunicadosMuroLargo === 0 && this.loaded" id="pol">
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
        this.loaded = true;
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

@media only screen and (max-width: 992px) {
  #tarjetaMuro {
    min-height: 40vh;
    max-height: 41vh;
  }
}

@media only screen and (min-width: 992px) {
  #tarjetaMuro {
    min-height: 75vh;
    max-height: 76vh;
  }
}

#letraMuro {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

#pol {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
}
</style>