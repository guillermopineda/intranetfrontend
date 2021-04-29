<template>
  <b-container id="marca" fluid>
    <Descarga @buscarDocumento="actualizarKiosco" />
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-2 pt-mb-5">KIOSCO</h2>
      </b-col>
    </b-row>
    <!-- <Descarga /> -->

    <template v-if="this.loading">
      <Loading />
    </template>

    <template v-else>
      <template v-if="errored">
        <Errored />
      </template>

      <template v-else>


        <template v-if="documentos.length > 0">
          <b-row
            v-for="documento in documentos"
            :key="documento.id"
            class="rounded sombra my-3"
            align-v="center"
          >
            <b-col cols="12">
              <b-row
                v-for="descarga in documento.documentos"
                :key="descarga.id"
              >
                <b-col cols="10" class=" h4 pt-2 pl-3">
                  <p class="letraMuro">
                  {{ documento.descripcion }}
                  </p>
                  <p class="letra">
                    {{ descarga.nombre }}
                  </p>
                </b-col>

                <b-col cols="2" class="pt-4 pr-3">
                  <b-link :href="descarga.documento" target="blank">
                    <font-awesome-icon
                      class="iconoIr faa-tada animated"
                      :icon="['fas', 'file-alt']"
                      size="2x"
                    />
                  </b-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </template>
        <template v-else-if="anunciosLargo>0 ">
          
          <b-col
              id="tarjetaMuro"
              v-for="anuncio in anuncios"
              :key="anuncio.id"
              class="px-4 my-0"
              cols="12"
            >
              <Anuncio :anuncio="anuncio" />
            </b-col>
        </template>
        <template v-else>
          <Noinfo/>
        </template>
        

        
        <!-- <template v-if="anunciosLargo>0">
          <b-col
              id="tarjetaMuro"
              v-for="anuncio in anuncios"
              :key="anuncio.id"
              class="px-4 my-0"
              cols="12"
            >
              <Anuncio :anuncio="anuncio" />
            </b-col>
        </template> -->
       
          
          <!-- <Noinfo /> -->
        
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
import gnService from "@/services/kiosco/gnService";
import gnServiceAviso from "@/services/aviso/gnService";
import Descarga from "./Descarga";
import Anuncio from "./Anuncio";
import Footer from "../Footer";
import Errored from "../Errored";
import Noinfo from "../Noinfo";
import Loading from "../Loading";
export default {
  name: "Kiosco",
  components: {
    Descarga,
    Footer,
    Anuncio,
    Errored,
    Noinfo,
    Loading,
  },
  data() {
    return {
      documentos: [],
      anuncios:[],
      servicio: "",
      loaded: false,
      loading: false,
      errored: false,
    };
  },
  methods: {
    async actualizarKiosco(servicio) {
      this.servicio = servicio;
      this.loading = true;
      if (servicio === "Formato") {
        await gnService.getKiosco().then(
          (documentos) =>
            (this.documentos = documentos.data.filter((documento) => {
              return documento.tipo.includes("Formato");
            }))
        );
         this.anuncios = 0;
        setTimeout(() => (this.loading = false), 500);
      } else if (servicio === "Política") {
        await gnService.getKiosco().then(
          (documentos) =>
            (this.documentos = documentos.data.filter((documento) => {
              return documento.tipo.includes("Política");
            }))
        );
         this.anuncios = 0;
        setTimeout(() => (this.loading = false), 500);
      } else if (servicio === "Logotipo") {
        await gnService.getKiosco().then(
          (documentos) =>
            (this.documentos = documentos.data.filter((documento) => {
              return documento.tipo.includes("Logotipo");
            }))
        );
         this.anuncios = 0;
        setTimeout(() => (this.loading = false), 500);
      } else if (servicio === "Aviso"){
        await gnServiceAviso
          .getAviso()
          .then((anuncios) => (this.anuncios = anuncios.data));
           this.documentos = 0;
        setTimeout(() => (this.loading = false), 1000);
      }
    },
  },
  watch: {
    servicio: {
      deep: true,
      handler: "actualizarKiosco",
    },
  },
  mounted() {
    this.loading = true;
    gnService
      .getKiosco()
      .then(
        (documentos) =>
          (this.documentos = documentos.data.filter((documento) => {
            return documento.tipo.includes("Formato");
          }))
      )
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => setTimeout(() => (this.loading = false), 1000));
  },
  computed:{
    documentosLargo(){
      return this.documentos.length
    },
    anunciosLargo(){
      return this.anuncios.length
    },
  }
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

p {
  height: 2rem;
}

a {
  color: #573655;
}

@media only screen and (max-width: 992px) {
  #tarjetaMuro {
    min-height: 40vh;
    max-height: 41vh;
  }
}

@media only screen and (min-width: 992px) {
  #tarjetaMuro {
    min-height: 75vh;
    max-height: 76vh;
  }
}

.letraMuro {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: larger;
}

.letra {

  font-size: medium;
}

@media only screen and (max-width: 576px) {
  .letraMuro {
    font-size: medium;
  }

    .letra {
    font-size: small;
  }
}

@media only screen and (max-width: 768px) {
  .letraMuro {
    font-size: medium;
  }

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

.formato:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

.formato {
  color: #e5e5e5;
  background-color: #185632;
  border-color: #3f664f;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(24, 86, 50 0.2);
}
.formato:focus {
  background-color: #185632;
  outline-color: #3f664f !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(24, 86, 50 0.4);
}

.formato:hover {
  background-color: #185632;
  outline-color: #3f664f !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(24, 86, 50 0.4);
}

.fa-lg {
  color: #e5e5e5;
}




/* TADA */

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-8deg);
    transform: scale(0.9) rotate(-8deg);
  }

  30%,
  50%,
  70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%,
  60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-8deg);
    -ms-transform: scale(0.9) rotate(-8deg);
    transform: scale(0.9) rotate(-8deg);
  }

  30%,
  50%,
  70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    -ms-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%,
  60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    -ms-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.faa-tada.animated,
.faa-tada.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-tada {
  -webkit-animation: tada 2s linear infinite;
  animation: tada 2s linear infinite;
}
</style>