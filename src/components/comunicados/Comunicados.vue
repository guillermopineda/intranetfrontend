<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-2 pt-m5-5">COMUNICADOS</h2>
        <Directorio @buscarMuro="actualizarMuro" />
      </b-col>
    </b-row>
    <template v-if="this.loading">
      <Loading />
    </template>
    <template v-else>
      <b-row>
        <b-col v-for="comunicado in comunicados" :key="comunicado.id" cols="12">
          <ListaComunicado :comunicado="comunicado" />
        </b-col>
      </b-row>

      <div v-if="comunicadosLargo === 0" id="pol">
        <Noinfo />
      </div>
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
import ListaComunicado from "./ListaComunicado";
import gnService from "@/services/muro/gnService";
import Universidad from "./Universidad";
import Fundacion from "./Fundacion";
import Formulario from "./Formulario";
import Footer from "../Footer";
import Errored from "../Errored";
import Noinfo from "../Noinfo";
import Loading from "../Loading";
import Directorio from "../Directorio";
export default {
  name: "Comunicados",
  components: {
    Universidad,
    Formulario,
    Fundacion,
    Footer,
    Errored,
    ListaComunicado,
    Noinfo,
    Loading,
    Directorio
  },
  data() {
    return {
      comunicados: [],
      servicio: "",
      loaded: false,
      loading: false,
      errored: false,
    };
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
    comunicadosLargo() {
      return this.comunicados.length;
    },
  },
};
</script>


<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  margin-top: 8rem;
}

.tarjetaComunicado {
  background-color: #ffffff;
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