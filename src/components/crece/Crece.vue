<template>
  <b-container>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">CRECE CON GN10</h2>
      </b-col>
    </b-row>
    <b-row class="text-justify">
      <b-col cols="12">
        <h6 class="pb-5 pt-2 text-justify">
          GN10 con el objetivo de hacerte crecer y desarrollar al máximo tus
          habilidades, crea "CRECE CON GN10", por lo que en esta sección podrás
          conocer las nuevas vacantes que se van generando día a día dentro de
          las empresas del Grupo GN10, también encontrarás la información
          necesaria que te permitirá conocer este proceso y los pasos para
          realizar tu postulación.
        </h6>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">CONOCE EL PROCESO</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="p-md-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiZWMyZDgwZjQtNzcxMS00Mjk5LWI2MTQtOTM4MGQ3N2Q2NzI5IiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">VACANTES</h4>
      </b-col>
    </b-row>

    <template v-if="this.loading">
      <Loading/>
    </template>

    <template v-else>
      <template v-if="errored">
        <Errored />
      </template>
      <template v-else>

      <template v-if="vacantes.length > 0">
        <b-row class="justify-content-around">
          <b-col
            cols="12"
            md="6"
            lg="4"
            class="tarjeta py-4 my-2"
            v-for="vacante in vacantes"
            :key="vacante.id"
          >
            <b-row>
              <b-col>
                <TarjetaVacante :vacante="vacante" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>

      <template v-else>
        <Noinfo />
      </template>
      </template>
    </template>

    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TarjetaVacante from "@/components/crece/TarjetaVacante";
import Footer from "../Footer";
import gnService from "@/services/crece/gnService";
import Noinfo from "../Noinfo";
import Errored from "../Errored";
import Loading from "../Loading";
export default {
  name: "Crece",
  components: {
    TarjetaVacante,
    Footer,
    Noinfo,
    Errored,
    Loading,
  },
  data() {
    return {
      vacantes: [],
      loading: false,
      mostrarModalVacante: false,
      errored: false,
    };
  },
  created() {
    this.loading = true;
    gnService
      .getVacantes()
      .then((vacantes) => (this.vacantes = vacantes.data.slice(0, 8)))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => setTimeout(() => (this.loading = false), 1000));
  },
};
</script>

<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  color: #282828;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

</style>