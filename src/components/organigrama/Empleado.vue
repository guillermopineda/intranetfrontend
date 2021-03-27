<template>
  <b-collapse
    :id="'accordion-tarjeta.id' + i"
    :accordion="'tarjeta.id-accordion'"
    class="collapse-div"
  >
    <b-container 
      v-for="(empleado) in empleadoDatas"
      :key="empleado.id"
    >
      <b-row
        class="justify-content-between rounded sombra my-3"
        @click="mostrarModal = !mostrarModal"
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>{{ empleado.nombre }}</p>
          <p id="letraPuesto">{{ empleado.puesto.substring(0, 20) + "..." }}</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar :src="empleado.foto" size="4rem"></b-avatar>
        </b-col>
      </b-row>
      <!-- <EmpleadoDetalle
        :mostrarModal="mostrarModal"
        :empleado="empleado"
        :tarjeta="tarjeta"
        :i="i"
      /> -->
    </b-container>
  </b-collapse>
</template>

<script>
import EmpleadoDetalle from "@/components/organigrama/EmpleadoDetalle";
export default {
  name: "Empleado",
  props: ["empleadoDatas", "tarjeta", "i"],
  components: {
    EmpleadoDetalle,
  },
  data() {
    return {
      mostrarModal: false,
    };
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

.collapse-div {
  width: 100%;
}

</style>