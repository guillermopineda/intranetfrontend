/* eslint-disable no-alert, no-console */
<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">ORGANIGRAMA</h2>
      </b-col>
    </b-row>
    <div v-for="(empleado,i) in empleados"
      :key="empleado.id">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle="'accordion-tarjeta.id' + i"
        align-v="center"
      >
        <b-col cols="6" class="h4 pt-4 pl-5">
          <p>
            <strong>{{ empleado.subtitulo }} </strong>  
          </p>
        </b-col>
        <b-col cols="4" md="3">
          <img
            class="mx-auto img-fluid"
            :src="empleado.imagen"
            :alt="empleado.titulo"
          />
        </b-col>
        <Empleado tarjeta="" :empleadoDatas="empleadoDatas[i]" empleado="empleado" :i="i" />
      </b-row>
    </div>
    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import gnService from "@/services/empleados/gnService";
import Empleado from "@/components/organigrama/Empleado";
import Footer from "../Footer";

export default {
  name: "Organigrama",
  components: {
    Empleado,
    Footer,
  },
  data() {
    return {
      empleados: [],
      empleadoDatas: {},
      loading: false,
    };
  },
  created() {
    this.loading = true;
    gnService.getEmpleados().then((res) => {
      let empleados = res.data;
      var temp = [];
      let empleadoDatas = {};
      empleados.map((em) => {
        em.unidad_de_negocio.map((item) => {
          if (temp.find((ii) => ii.id == item.id)) return;
          temp.push(item);
        });
      });
      for (let index = 0; index < temp.length; index++) {
        const element = temp[index];
        var empleadoDatasAry = [];
        for (let j = 0; j < empleados.length; j++) {
          const ele = empleados[j];
          let flag = true;
          if(ele.unidad_de_negocio) {
            ele.unidad_de_negocio.forEach(category => {
              if(flag) {
                if(category.id == element.id){
                  empleadoDatasAry.push(ele);
                  flag = false;
                }
              }
            });
          }
        }
        empleadoDatas[index] = empleadoDatasAry
      }
      this.empleados = temp;
      this.empleadoDatas = empleadoDatas;
    });
    setTimeout(() => (this.loading = false), 1000);
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