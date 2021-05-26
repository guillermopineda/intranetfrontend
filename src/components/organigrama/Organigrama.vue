<template>
  <b-container id="marca" fluid>
    <b-container align="center">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="font-weight-bold pt-2 pt-md-5 pb-1">ORGANIGRAMA</h2>
        </b-col>
      </b-row>
    </b-container>
     <b-form @submit="verOrganigrama" @reset="onReset">
    <b-container fluid class="pt-2 pt-md-5">
      <b-row class="text-justify">
        
          <b-col cols="12" md="6">
            <b-form-select
              class="my-md-3 my-1"
              v-model="form.unidadSeleccionada"
              :options="unidad"
              value-field="value"
            >
              <template #first>
                <b-form-select-option value="" disabled
                  >--- Elige Unidad de Negocio ---</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-col>

          <b-col cols="12" md="6">
            <b-form-select
              class="my-md-3 my-1"
              v-model="form.areaSeleccionada"
              :options="area"
              value-field="value"
            >
              <template #first>
                <b-form-select-option value="" disabled
                  >--- Elige Área ---</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-col>
          <b-col>
            <b-button type="submit" value="Send" class="btn-primary bg-primary w-100 my-md-2 my-1"
              >Buscar</b-button
            >
            <b-button type="reset" class="btn-primary bg-primary w-100 my-md-2 my-1 "
              >Borrar</b-button
            >
          </b-col>

      </b-row>
    </b-container>
    </b-form>

    <template v-if="this.loading">
      <Loading />
    </template>

    <template v-else>
      <template v-if="errored">
        <Errored />
      </template>

      <template v-else>
        <template v-if="espera">
          <Espera />
        </template>
        <template v-else>
          <template v-if="companias.length > 0">
            <div
              v-for="(compania, i) in filtroSubtitulo"
              :key="compania.id"
              class="my-md-4 my-3"
            >
              <b-row
                class="justify-content-between mx-2 alto rounded sombra"
                v-b-toggle="'accordion-compania.id' + i"
                align-v="center"
              >
                <b-col cols="6" class="h4 pt-4 pl-md-5 pl-3">
                  <p>{{ compania.subtitulo }}</p>
                </b-col>
                <b-col cols="5" md="3">
                  <img
                    class="mx-auto img-fluid"
                    :src="compania.imagen"
                    :alt="compania.titulo"
                  />
                </b-col>
                <Empleado :compania="compania" :i="i" />
              </b-row>
            </div>
          </template>
          <template v-else>
            <Noinfo />
          </template>
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
import gnService from "@/services/organigrama/gnService";
import Empleado from "@/components/organigrama/Empleado";
import Espera from "@/components/organigrama/Espera";
import Footer from "../Footer";
import Errored from "../Errored";
import Noinfo from "../Noinfo";
import Loading from "../Loading";

export default {
  name: "Organigrama",
  components: {
    Empleado,
    Espera,
    Footer,
    Errored,
    Noinfo,
    Loading,
  },
  data() {
    return {
      form: {
        unidadSeleccionada: "",
        areaSeleccionada: "",
      },
      companias: [],
      loading: false,
      errored: false,
      buscarUnidad: "",
      areas: [],
      espera: false,
    };
  },
  mounted() {
    this.loading = true;
    gnService
      .getOrganigrama()
      .then((companias) => (this.companias = companias.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    this.espera = true;
  },
  methods: {
    onReset(e) {
      e.preventDefault();
      // Reset our form values
      this.form.unidadSeleccionada = "";
      this.form.areaSeleccionada = "";
      this.espera = true;
    },
    verOrganigrama(e) {
      e.preventDefault();
      // Reset our form values
      this.espera = false;
    },
  },
  computed: {
    unidad() {
      const unidad = new Set();
      this.companias.forEach((x) => unidad.add(x.titulo));
      return Array.from(unidad);
    },
    area() {
      const area = new Set();
      this.filtroUnidad.forEach((x) => area.add(x.subtitulo));
      return Array.from(area);
    },

    filtroSubtitulo() {
      return this.filtroUnidad.filter((compania) => {
        return compania.subtitulo.includes(this.form.areaSeleccionada);
      });
    },
    filtroUnidad() {
      return this.companias.filter((compania) => {
        return compania.titulo.includes(this.form.unidadSeleccionada);
      });
    },
  },

  // mounted() {
  //   this.loading = true;
  //   gnService
  //     .getEmpleados()
  //     .then((res) => {
  //       let companias = res.data;
  //       var temp = [];
  //       let empleadoDatas = {};
  //       companias.map((em) => {
  //         em.unidad_de_negocio.map((item) => {
  //           if (temp.find((ii) => ii.id == item.id)) return;
  //           temp.push(item);
  //         });
  //       });
  //       for (let index = 0; index < temp.length; index++) {
  //         const element = temp[index];
  //         var empleadoDatasAry = [];
  //         for (let j = 0; j < companias.length; j++) {
  //           const ele = companias[j];
  //           let flag = true;
  //           if (ele.unidad_de_negocio) {
  //             ele.unidad_de_negocio.forEach((category) => {
  //               if (flag) {
  //                 if (category.id == element.id) {
  //                   empleadoDatasAry.push(ele);
  //                   flag = false;
  //                 }
  //               }
  //             });
  //           }
  //         }
  //         empleadoDatas[index] = empleadoDatasAry;
  //       }
  //       this.companias = temp
  //       this.empleadoDatas = empleadoDatas;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // },

  //   computed: {
  //   sortCompanias(){
  //     return this.companias.sort(function(a,b){
  //   var aTitulo = a.titulo;
  //   var bTitulo = b.titulo;
  //   var aSubtitulo = a.subtitulo;
  //   var bSubtitulo = b.subtitulo;

  //   if(aTitulo == bTitulo)
  //   {
  //       return (aSubtitulo < bSubtitulo) ? -1 : (aSubtitulo > bSubtitulo) ? 1 : 0;
  //   }
  //   else
  //   {
  //       return (aTitulo < bTitulo) ? -1 : 1;
  //   }
  //     })
  //   }
  // },
};
</script>

<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  color: #282828;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-top: 8rem;
}
.sombra {
  background-color: white;
  border-color: #e5e5e5;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.2);
}
.sombra:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}
.sombra:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

.alto {
  min-height: 8rem;
  height: 100%;
}

@media only screen and (max-width: 576px) {
  p {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 378px) {
  p {
    font-size: 0.8rem;
  }
}

select {
  color: #573655 !important;
  border-color: #e5e5e5;
  text-align: center;
  text-align-last: center;
  -moz-text-align-last: center;
}

.btn {
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: large;
  margin: 0.5rem;
  min-width: 100%;
}

.bg-primary {
  background-color: #185632 !important;
}

.btn-primary {
  color: #fff;
  background-color: #185632;
  border-color: #185632;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  color: #185632;
  background-color: #fff !important;
  border-color: #185632;
}

.btn-primary:active {
  color: #185632 !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: #185632 !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(28, 86, 50, 0.5) !important;
}
</style>