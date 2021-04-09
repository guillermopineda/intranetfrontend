<template>
  <b-card
    :title="vacante.titulo"
    :sub-title="vacante.subtitulo"
    :img-src="vacante.imagen"
    :img-alt="vacante.titulo"
    img-top
    tag="article"
    style="max-width: 25rem; min-width: 23rem"
    class="mb-2 text-center"
  >
    <b-card-text class="text-justify" style="min-height: 200px">
      {{ vacante.descripcion }}
    </b-card-text>

    <b-button
    :id="vacante.id"
      @click="mostrarModalVacante = !mostrarModalVacante"
      class="btn-primary bg-primary"
      >Postularme
    </b-button>
    <ModalVacante :mostrarModalVacante="mostrarModalVacante" :vacante="vacante" />
  </b-card>
</template>

<script>
import ModalVacante from "@/components/crece/ModalVacante";
export default {
    name:"TarjetaVacante",
    props: ["vacante"],
    components:{
        ModalVacante
    },
    data(){
        return{
            mostrarModalVacante : false,
        }
    }
};
</script>




<style scoped>

.btn {
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: large;
  margin: .5rem;
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
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: #185632 !important;
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(28, 86, 50, 0.5) !important;
}
</style>