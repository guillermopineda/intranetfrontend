<template>
  <b-container id="marca" fluid>
    <Descarga @buscarDocumento="actualizarKiosco"/>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-5 pb-3">KIOSCO</h2>
      </b-col>
    </b-row>
    <!-- <Descarga /> -->

    <template v-if="this.loading">
      <b-container align="center">
        <b-row>
          <b-col cols="12" align-self="center">
            <div class="loadPantalla">
              <div class="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-else>
      <b-row
        v-for="documento in documentos"
        :key="documento.id"
        class="justify-content-between rounded sombra my-3"
        align-v="center"
      >
        <b-col cols="8" class="h5 pt-4 pl-5" v-for="descarga in documento.documentos" :key=descarga.id>
          <p>
            <strong>{{ documento.descripcion }}</strong>
          </p>
          <p>
            <small>{{ descarga.nombre }}</small>
          </p>
        </b-col>
        <b-col cols="4" md="3" align="center" v-for="descarga in documento.documentos" :key=descarga.id>

          <b-link :href="descarga.documento" target="blank">
          <font-awesome-icon
            class="iconoIr faa-tada animated"
            :icon="['fas', 'file-alt']"
            size="3x"
          />
        </b-link>
        </b-col>
      </b-row>

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
import Descarga from "./Descarga";
import Footer from "../Footer";
export default {
  name: "Kiosco",
  components: {
    Descarga,
    Footer,
  },
  data() {
    return {
      documentos: [],
      servicio: "",
      loaded: false,
      loading: false,
      documentosDescarga: [],
    };
  },
  methods:{
    async actualizarKiosco(servicio){
      this.servicio= servicio;
      this.loading = true;
      if (servicio === "Formato"){
        await gnService.getKiosco().then((documentos) =>(this.documentos = documentos.data.filter((documento)=>{
         return documento.tipo.includes("Formato");
       })));
       setTimeout(() => (this.loading = false), 500);
      }else if (servicio ==="Política"){
        await gnService.getKiosco().then((documentos) =>(this.documentos = documentos.data.filter((documento)=>{
         return documento.tipo.includes("Política");
       })));
       setTimeout(() => (this.loading = false), 500);
      }else if (servicio === "Logotipo"){
        await gnService.getKiosco().then((documentos) =>(this.documentos = documentos.data.filter((documento)=>{
         return documento.tipo.includes("Logotipo");
       })));
       setTimeout(() => (this.loading = false), 500);
      }else{
        await gnService.getKiosco().then((documentos) =>(this.documentos = documentos.data));
        setTimeout(() => (this.loading = false), 1000);
      }

    }
  },
  watch: {
    servicio: {
      deep: true,
      handler: "actualizarKiosco",
    },
  },
  created() {
    this.loading = true;
       gnService.getKiosco().then((documentos) =>(this.documentos = documentos.data.filter((documento)=>{
         return documento.tipo.includes("Formato");
       })));
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

.formato:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
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
  box-shadow: 4px 4px 4px 4px rgba(24, 86, 50 0.4);
}

.formato:hover {
  background-color: #185632;
  outline-color: #3f664f !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(24, 86, 50 0.4);
}

.fa-lg {
  color: #e5e5e5;
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

.loadPantalla {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #573655;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.iconoIr {
  color: #573655;
}

.iconoIr:focus {
  outline-color: #fff !important;
}



/* TADA */

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(.9) rotate(-8deg);
    transform: scale(.9) rotate(-8deg);
  }

  30%, 50%, 70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%, 60% {
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

  10%, 20% {
    -webkit-transform: scale(.9) rotate(-8deg);
    -ms-transform: scale(.9) rotate(-8deg);
    transform: scale(.9) rotate(-8deg);
  }

  30%, 50%, 70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    -ms-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%, 60% {
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