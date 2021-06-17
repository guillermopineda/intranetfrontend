<template>
  <div>
    <b-row>
      <b-col>
        <b-button
          @click="buscarDirectorio"
          v-b-modal.my-modal
          class="w-100 agenda"
          >Directorio
          <font-awesome-icon
            class="faa-horizontal animated m-2"
            v-b-modal.my-modal
            :icon="['fas', 'address-book']"
            size="lg"
            :transform="{ rotate: 330 }"
          />
          <b-modal
            id="my-modal"
            title="DIRECTORIO"
            hide-footer
            scrollable
            size="lg"
          >
            <template v-if="this.loading">
              <Loading />
            </template>

            <template v-else>
              <div class="text-justify d-block">
                <b-form inline>
                  <label class="sr-only" for="inline-form-input-buscar"
                    >BUSCAR</label
                  >

                  <b-input-group class="mt-3 w-100 px-md-5 mx-auto">
                    <b-form-input
                      placeholder="BUSCAR"
                      id="inline-form-input-buscar"
                      type="search"
                      v-model="buscarColaborador"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button id="btnModal">
                        <font-awesome-icon
                          :icon="['fas', 'search']"
                          size="lg"
                        />
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form>
              </div>
              <template v-if="filtro.length > 0">
                <b-list-group
                  flush
                  class="py-5 px-md-5 mx-auto w-100 letraTarjeta"
                >
                  <b-list-group-item
                    class="flex-column align-items-start letra"
                    v-for="colaborador in filtro"
                    :key="colaborador.id"
                  >


                  <div v-if="colaborador.telefonos.length != 0 ">
                    <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 nombre">{{ colaborador.nombre }}</h6>
                    </div>
                    </div>
                    <div v-else-if="colaborador.correos.length !=0">
                       <div class="d-flex w-100 justify-content-between">
                      <h6 class="mb-1 nombre">{{ colaborador.nombre }}</h6>
                    </div>
                    </div>
                    <div
                      v-for="telefono in colaborador.telefonos"
                      :key="telefono.id"
                    >
                      <p v-if="telefono.tipo === fijo" class="mb-1">
                        <strong>Teléfono:</strong> <br />{{ telefono.numero }}
                        Ext:
                        {{ telefono.extension }}
                      </p>
                      <a :href="`tel:+52${telefono.numero}`">
                        <p v-if="telefono.tipo === movil" class="mb-1">
                          <strong>Móvil:</strong> <br />{{ telefono.numero }},
                        </p>
                      </a>
                    </div>

                    <div>
                      <p
                        class="mb-1"
                        v-for="(correo, index) in colaborador.correos"
                        :key="correo.id"
                      >
                        <a :href="`mailto:${correo.correo}`"
                          ><strong> Correo {{ index + 1 }}:</strong> <br />{{
                            correo.correo
                          }}
                        </a>
                      </p>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </template>
              <template v-else>
                <Loading />
              </template>
            </template>
          </b-modal>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import gnService from "@/services/empleados/gnService";
import Loading from "./Loading";
export default {
  name: "Directorio",
  components: {
    Loading,
  },
  data() {
    return {
      buscarComunicado: "",
      buscarDirectorioModal: "",
      colaboradores: [],
      buscarColaborador: "",
      fijo: "F",
      movil: "M",
      loading: false,
    };
  },
  methods: {
    buscarDirectorio() {
      this.loading = true;
      gnService.getEmpleados().then(
        (colaboradores) =>
          (this.colaboradores = colaboradores.data.sort(function (a, b) {
            if (a.nombre < b.nombre) {
              return -1;
            }
            if (a.nombre > b.nombre) {
              return 1;
            }
            return 0;
          }))
      );
      setTimeout(() => (this.loading = false), 500);
    },
  },
  computed: {
    filtro() {
      return this.colaboradores.filter((colaborador) => {
        return colaborador.nombre.includes(this.buscarColaborador);
      });
    },
  },
};
</script>

<style scoped>
.letra {
  font-family: "Montserrat", sans-serif;
  color: #282828;
  font-size: 1rem;
}
.nombre {
  color: #185632;
  font-weight: bold;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #282828;
}
.btn-secondary {
  color: #185632;
  font-weight: 600;
  padding-bottom: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  border: none;
  background-color: transparent;
  box-shadow: transparent;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0.3rem;
  transition: background-size 1s ease;
}
.btn-secondary:hover {
  color: #185632;
  border: none;
  background-color: #e5e5e5;
  box-shadow: none;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #185632;
  border: none;
  background-color: #e5e5e5;
  box-shadow: none;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease;
}
.btn-secondary:focus {
  color: #185632;
  border: none;
  box-shadow: none;
  background-color: #cccccc;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease, background-color 1s ease;
}

::v-deep .modal-header {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  border: none;
}
::v-deep .modal-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
}
::v-deep #btnModal {
  border-radius: 0 1rem 1rem 0;
  font-size: medium;
  color: #fff;
  background-color: #185632;
  border-color: #185632;
  transition: all 0.3s ease;
  padding: 0 1rem;
  background-image: none;
}
::v-deep #inline-form-input-buscar {
  border-radius: 1rem 0 0 1rem;
  font-size: medium;
  color: #282828 !important;
}
::v-deep #inline-form-input-buscar:focus {
  color: #282828 !important;
  border-color: #e5e5e5;
  box-shadow: 2px 2px 2px 1px rgba(87, 54, 85, 0.2);
}
.agenda {
  color: #573655;
  background-color: transparent;
  box-shadow: transparent;
  background-image: linear-gradient(to right, #cccccc, #cccccc);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0.3rem;
  transition: background-size 1s ease;
}
.agenda:hover {
  color: #573655;
  border: none;
  background-color: #ffffff;
  box-shadow: none;
  background-image: linear-gradient(to right, #cccccc, #cccccc);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0rem;
  transition: background-size 1s ease;
}
.agenda:not(:disabled):not(.disabled):active,
.agenda:not(:disabled):not(.disabled).active,
.show > .agenda.dropdown-toggle {
  color: #573655;
  border: none;
  background-color: #ffffff;
  box-shadow: none;
  background-image: linear-gradient(to right, #cccccc, #cccccc);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0rem;
  transition: background-size 1s ease;
}
.agenda:focus {
  color: #573655;
  border: none;
  box-shadow: none;
  background-color: #ffff;
  background-image: linear-gradient(to right, #cccccc, #cccccc);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0rem;
  transition: background-size 1s ease, background-color 1s ease;
}

@media only screen and (max-width: 992px) {
  .agenda {
    font-size: 1.1rem;
    padding-bottom: 1rem;
  }
  .fa-lg {
    font-size: 2rem;
    line-height: 0.8rem;
  }
  .btn-secondary {
    font-size: 1.1rem;
  }
}

@media only screen and (max-width: 768px) {
  .agenda {
    font-size: 0.9rem;
    padding-bottom: 0.8rem;
  }
  .fa-lg {
    font-size: 2rem;
    line-height: 0.8rem;
  }
  .btn-secondary {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 576px) {
  .agenda {
    font-size: 0.7rem;
    padding-bottom: 0.6rem;
  }
  .fa-lg {
    font-size: 1.5rem;
    line-height: 0.7rem;
  }
  .btn-secondary {
    font-size: 0.7rem;
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