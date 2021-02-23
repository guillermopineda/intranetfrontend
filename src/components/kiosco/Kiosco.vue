<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-5 pb-3">KIOSCO</h2>
      </b-col>
    </b-row>
    <Descarga />

    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>RECURSOS HUMANOS</strong></p>
      </b-col>
      <b-col cols="4" md="3">
        <img
          class="mx-auto img-fluid"
          src="../../assets/logo.png"
          alt="Logo GN10"
        />
      </b-col>
    </b-row>

<b-collapse id="my-collapse">
      <b-row
        class="justify-content-between rounded sombra formato my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>CAJA DE AHORRO</p>
        </b-col>
        <b-col cols="3" md="2">
            <font-awesome-icon
          :icon="['fas', 'file-pdf']"
          size="3x"
        />
        </b-col>
      </b-row>
    </b-collapse>


 <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse-1
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>FINANZAS</strong></p>
      </b-col>
      <b-col cols="4" md="3">
        <img
          class="mx-auto img-fluid"
          src="../../assets/logo.png"
          alt="Logo GN10"
        />
      </b-col>
    </b-row>

<b-collapse id="my-collapse-1">
      <b-row
        class="justify-content-between rounded sombra formato my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>SOLICITUD DE PAGOS</p>
        </b-col>
        <b-col cols="3" md="2">
            <font-awesome-icon
          :icon="['fas', 'file-pdf']"
          size="3x"
        />
        </b-col>
      </b-row>
    </b-collapse>






    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Descarga from "./Descarga";
import Footer from "../Footer";
export default {
  name: "Kiosco",
  components: {
    Descarga,
    Footer,
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

.sombra {
  background-color: white;
  border-color: #e5e5e5;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.2);
}
.sombra:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
}

.formato:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
}

.formato {
    color: #e5e5e5;
  background-color: #185632;
  border-color: #3F664F;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(24,86,50 0.2);
}
.formato:focus {
  background-color: #185632;
  outline-color: #3F664F !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(24,86,50 0.4);
}

.formato:hover {
  background-color: #185632;
  outline-color: #3F664F !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(24,86,50 0.4);
}




.fa-lg{
    color:#e5e5e5;
}

@media only screen and (min-width: 992px) {
  .btn-secondary {
    font-size: 1.5rem;
    padding-bottom: 0.8rem;
  }

  .fa-lg {
    font-size: 2.5rem;
    line-height: 1rem;
  }
}




</style>