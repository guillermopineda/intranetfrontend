<template>
  <div id="pol">
    <b-img
      :id="notaMuroFundacion.id"
      :src="notaMuroFundacion.imagen_pequena"
      @click="mostrarModal=true"
      class="h-100 w-100"
      rounded
    ></b-img>
    <ModalCarrusel :mostrarModal="mostrarModal" :notaMuroFundacion="notaMuroFundacion" />
    
  </div>
</template>

<script>
import ModalCarrusel from "./ModalCarrusel";
export default {
  name: "ListaFundacion",
  props: ["notaMuroFundacion"],
  components: {
      ModalCarrusel,
  },
  data(){
      return {
          mostrarModal: false,
      }
  }
};
</script>



<style scoped>

#pol {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
}
</style>