<template>
  <b-container id="marca" fluid>
    <!-- <Buscador @buscarDesdeHijo="buscarImagenes"/> -->
    <BotonesMuro @buscarMuro="actualizarMuro" />

    <template v-if="this.loading">
      <b-container align="center">
        <b-row>
          <b-col cols="12" align-self="center">
            <div class="loadPantalla">
              <div class="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-else>
      <template v-if="this.servicio === ''">
        <b-row>
          <b-col
            id="tarejetaMuro"
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
      <template v-if="this.loaded">
        <div
          v-if="this.comunicadosMuro.length === 0 || this.comunicados.length === 0"
          id="pol"
        >
          <b-container class="shadow-lg rounded p-6 mx-2 bg-light">
            <b-row class="justify-content-between h-100">
              <b-col cols="6" class="h4 pt-4 pl-4" align-self="start">
                <p id="letraMuro">
                  SIN INFORMACIÓN DISPONIBLE, VUELVE PRONTO...
                </p>
              </b-col>
              <b-col cols="4" align-self="end">
                <img
                  class="mx-auto img-fluid"
                  src="../../assets/logo.png"
                  alt="Logo GN10"
                />
              </b-col>
            </b-row>
          </b-container>
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
      comunicadosMuro: [],
      comunicados: [],
      servicio: "",
      loaded: false,
      loading: false,
    };
  },

  methods: {
    async actualizarMuro(servicio) {
      this.servicio = servicio;
      this.loading = true;

      if (servicio === "") {
        await gnService
          .getMuro()
          .then(
            (comunicados) => (this.comunicados = comunicados.data.slice(0, 5))
          );
        setTimeout(() => (this.loading = false), 1000);
         this.loaded = true;
      } else {
        await gnService
          .getMuro(servicio)
          .then(
            (comunicadosMuro) =>
              (this.comunicadosMuro = comunicadosMuro.data.slice(0, 5))
          );
        setTimeout(() => (this.loading = false), 1000);
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

  created() {
     this.loading = true;
    gnService
      .getMuro()
      .then((comunicados) => (this.comunicados = comunicados.data.slice(0, 5)));
      setTimeout(() => (this.loading = false), 1000);

  },

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

@media only screen and (min-width: 992px) {
  #tarejetaMuro {
    min-height: 75vh;
    max-height: 76vh;
  }
}


.loadPantalla {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #573655;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

</style>