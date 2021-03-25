<template>
     <b-modal 
     v-model="mostrar" 
     title="PERFIL GN10" 
     hide-footer>
      <b-row class="justify-content-center">
        <b-col cols="12" class="my-5" align="center">
          <b-avatar :src="empleado.foto" size="10rem"></b-avatar>
        </b-col>
        <b-col cols="12" align="center" class="h5">
          <p>{{empleado.nombre}}</p>
        </b-col>
        <b-col cols="12" class="h6 mb-4 chart" align="center">
          <font-awesome-icon
            class="chart faa-horizontal animated"
            @click="mostrarOrganigrama = !mostrarOrganigrama"
            :icon="['fas', 'sitemap']"
            size="3x"
          />
        </b-col>
        <b-col cols="12" class="h6" align="justify">
          <p>
            <strong>Trayectoria: </strong> {{empleado.trayectoria}}
          </p>
          <p>
            <strong>Intereses: </strong> {{empleado.intereses}} 
          </p>
          <p>
            <strong>Ubicación: </strong>  {{empleado.centro_de_trabajo.nombre}}
          </p>
        </b-col>
      </b-row>
      <OrganigramaDetalle :mostrarOrganigrama="mostrarOrganigrama" :empleado="empleado" :tarjeta="tarjeta" :i="i" />
    </b-modal>
</template>

<script>
import OrganigramaDetalle from "@/components/organigrama/OrganigramaDetalle"
export default {
    name: "EmpleadoDetalle",
    components:{
        OrganigramaDetalle
    },
    props: [
    "empleado",
    "tarjeta",
    "i",
    "mostrarModal",
  ],
   computed: {
    mostrar: {
      get() {
        return this.mostrarModal;
      },
      set(valor) {
        return valor.mostrarModal;
      },
    },
  },
   data(){
      return {
          mostrarOrganigrama: false,
      }
  }
}
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