<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">ORGANIGRAMA</h2>
      </b-col>
    </b-row>
    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>CÓMITE EJECUTIVO</strong></p>
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
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>LUIS AGUIRRE</p>
          <p id="letraPuesto">BOARD</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr_1.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>EDUARDO MURCIO</p>
          <p id="letraPuesto">BOARD</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr_2.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>EDUARDO TERROBA</p>
          <p id="letraPuesto">DIRECTOR RH</p>
        </b-col>
        <b-col cols="3" md="2" v-b-modal.modal-1>
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse-2
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

    <b-collapse id="my-collapse-2">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>EDUARDO TERROBA</p>
          <p id="letraPuesto">DIRECTOR RH</p>
        </b-col>
        <b-col cols="3" md="2" v-b-modal.modal-1>
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse-2">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>LAURA RODRIGUEZ</p>
          <p id="letraPuesto">LÍDER DESARROLLO DE TALENTO</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse-2">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle.collapse-1
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>SERGIO MARTINEZ</p>
          <p id="letraPuesto">GERENTE DE PERSONAL</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse-3
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>FUNDACIÓN</strong></p>
      </b-col>
      <b-col cols="4" md="3">
        <img
          class="mx-auto img-fluid"
          src="../../assets/logoFundacion.png"
          alt="Logo Fundación"
        />
      </b-col>
    </b-row>

    <b-collapse id="my-collapse-3">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>MARIANA GUERRERO</p>
          <p id="letraPuesto">DIRECTORA</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse-3">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>NOMBRE EMPLEADO</p>
          <p id="letraPuesto">PUESTO EMPLEADO</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse-4
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>CAPITAL PEOPLE</strong></p>
      </b-col>
      <b-col cols="4" md="3">
        <img
          class="mx-auto img-fluid"
          src="../../assets/logoCapitalpeople.png"
          alt="Logo Capital People"
        />
      </b-col>
    </b-row>

    <b-collapse id="my-collapse-4">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>DELIA CAMPOS</p>
          <p id="letraPuesto">DIRECTORA</p>
        </b-col>
        <b-col cols="3" md="2" v-b-modal.modal-1>
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse-4">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>PALOMA OCAMPO</p>
          <p id="letraPuesto">DIRECTORA SERVICIO AL CLIENTE</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-collapse id="my-collapse-4">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>NOMBRE COMPLETO</p>
          <p id="letraPuesto">PUESTO EMPLEADO</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar src="" size="4rem"></b-avatar>
        </b-col>
      </b-row>
    </b-collapse>

    <b-modal id="modal-1" title="PERFIL GN10" hide-footer>
      <b-row class="justify-content-center">
        <b-col cols="12" class="my-5" align="center">
          <b-avatar src="" size="8rem"></b-avatar>
        </b-col>
        <b-col cols="12" align="center" class="h5">
          <p>NOMBRE EMPLEADO</p>
        </b-col>
        <b-col cols="12" class="h6 mb-4 chart" align="center">
          <font-awesome-icon
            class="chart faa-horizontal animated"
            v-b-modal.modal-chart
            :icon="['fas', 'sitemap']"
            size="3x"
          />
        </b-col>
        <b-col cols="12" class="h6" align="justify">
          <p>
            <strong>Trayectoria, </strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Alias ex soluta in nostrum velit rerum
            recusandae, deleniti eligendi neque possimus optio aut blanditiis
            sed quidem est. Non esse sit ullam!
          </p>
          <p>
            <strong>Intereses, </strong> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Alias ex soluta in nostrum velit rerum recusandae,
            deleniti eligendi neque possimus optio aut blanditiis sed quidem
            est. Non esse sit ullam!
          </p>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal id="modal-chart" title="ORGANIGRAMA" hide-footer size="lg">
      <img
        class="mx-auto img-fluid"
        src="../../assets/mapaOrganigrama.png"
        alt="Organigrama"
      />
    </b-modal>

    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import Footer from "../Footer";

export default {
  name: "Organigrama",
  components: {
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

.sombra:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
}

::v-deep .modal-header {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  border: none;
}

::v-deep .modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
}

#letraPuesto {
  color: #e5e5e5;
  font-weight: bold;
  font-size: 1rem;
}

.chart {
  color: #573655;
}

.chart:focus {
  outline-color: #fff !important;
}

@media only screen and (min-width: 992px) {
  #letraPuesto {
    font-size: 1.5rem;
  }
}

/* HORIZONTAL */

@-webkit-keyframes horizontal {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  6% {
    -webkit-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  12% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  18% {
    -webkit-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  24% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  30% {
    -webkit-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  36% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes horizontal {
  0% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  6% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  12% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  18% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  24% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  30% {
    -webkit-transform: translate(5px, 0);
    -ms-transform: translate(5px, 0);
    transform: translate(5px, 0);
  }

  36% {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.faa-horizontal.animated,
.faa-horizontal.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-horizontal {
  -webkit-animation: horizontal 2s ease infinite;
  animation: horizontal 2s ease infinite;
}
</style>