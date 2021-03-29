<template>
     <b-modal 
     v-model="mostrar" 
     :id="'accordion-empleadoData.id' + index +i"
     :accordion="'empleadoData.id-accordion' + index + i"
     title="PERFIL GN10"  
     hide-footer>
      <b-row class="justify-content-center">
        <b-col cols="12" class="my-5" align="center">
          <b-avatar :src="empleadoData.foto" size="10rem"></b-avatar>
        </b-col>
        <b-col cols="12" align="center" class="h5 letra">
          <p><strong>{{empleadoData.nombre}}</strong></p>
        </b-col>
        <b-col cols="12" class="h6 mb-4 chart" align="center">
          <font-awesome-icon
            class="chart faa-horizontal animated"
            @click="mostrarOrganigrama = !mostrarOrganigrama"
            :icon="['fas', 'sitemap']"
            size="3x"
          />
        </b-col>
        <b-col cols="12" class="h5 letra" align="justify">
          <p>
            <strong>Trayectoria: </strong> {{empleadoData.trayectoria}}
          </p>
          <p>
            <strong>Intereses: </strong> {{empleadoData.intereses}} 
          </p>
          <p>
            <strong>Ubicación: </strong>  {{empleadoData.centro_de_trabajo.nombre}}
          </p>
        </b-col>
      </b-row>
      <OrganigramaDetalle :mostrarOrganigrama="mostrarOrganigrama" :empleadoData="empleadoData" :compania="compania" :i="i" />
    </b-modal>
</template>

<script>
import OrganigramaDetalle from "@/components/organigrama/OrganigramaDetalle";
export default {
    name: "EmpleadoDetalle",
    components:{
        OrganigramaDetalle
    },
    props: [
    "mostrarModal",
    "empleadoData",
    "index",
    "i",
    "compania"
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

.letra {
  font-family: "Montserrat", sans-serif;
  color: #282828;
  font-size: 1rem;
}

.chart {
  color: #573655;
}

.chart:focus {
  outline-color: #fff !important;
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