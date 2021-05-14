<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-2 pt-mb-5">MURO GN10</h2>
        <Directorio @buscarMuro="actualizarMuro" />
      </b-col>
    </b-row>
    <template v-if="this.loading">
      <Loading />
    </template>

    <template v-else>
      <b-row class="px-3">
        <b-col
          v-for="comunicadoMuro in comunicadosMuro"
          :key="comunicadoMuro.id"
          class="mb-4 rounded tarjetaComunicado"
          cols="12"
        >
          <ListaMuro :comunicadoMuro="comunicadoMuro" />
        </b-col>
      </b-row>

      <div v-if="comunicadosMuroLargo === 0" id="pol">
        <Noinfo />
      </div>
    </template>

    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-2 pt-mb-5">AVISO OPORTUNO</h2>
      </b-col>
    </b-row>

    <template v-if="this.loading">
      <Loading />
    </template>

    <template v-else>
      <template v-if="anunciosLargo > 0">
       <b-row class="px-3"> 
        <b-col
          v-for="anuncio in anuncios"
          :key="anuncio.id"
          class="mb-4  rounded tarjetaComunicado"
          cols="12"
        >
          <Anuncio :anuncio="anuncio" />
        </b-col>
       </b-row>
      </template>
      <template v-else>
        <Noinfo />
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
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import ListaMuro from "./ListaMuro";
import Anuncio from "./Anuncio";
import gnService from "@/services/muro/gnService";
import gnServiceAviso from "@/services/aviso/gnService";
import Universidad from "./Universidad";
import Formulario from "./Formulario";
import Footer from "../Footer";
import Errored from "../Errored";
import Noinfo from "../Noinfo";
import Loading from "../Loading";
import Directorio from "../Directorio";
export default {
  name: "Muro",
  components: {
    Universidad,
    Formulario,
    Footer,
    Errored,
    ListaMuro,
    Noinfo,
    Loading,
    Directorio,
    Anuncio,
  },
  data() {
    return {
      comunicadosMuro: [],
      loading: false,
      errored: false,
      anuncios: [],
    };
  },
  mounted(servicio) {
    var servicio = "informativo/";
    this.loading = true;
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

    gnServiceAviso
      .getAviso()
      .then((anuncios) => (this.anuncios = anuncios.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => setTimeout(() => (this.loading = false), 1000));
    this.documentos = 0;
    setTimeout(() => (this.loading = false), 1000);
  },
  computed: {
    comunicadosMuroLargo() {
      return this.comunicadosMuro.length;
    },
    anunciosLargo() {
      return this.anuncios.length;
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