<template>
  <div id="pol">
    <b-img
      :id="comunicadoMuro.id"
      :src="comunicadoMuro.imagen_pequena"
      @click="mostrarModal = !mostrarModal"
      class="h-100 w-100"
      rounded
     
    ></b-img>
    <ModalCarrusel
      :mostrarModal="mostrarModal"
      :comunicadoMuro="comunicadoMuro"
    />


  </div>
</template>

<script>
import ModalCarrusel from "./ModalCarrusel";
export default {
  name: "ListaMuro",
  props: ["comunicadoMuro"],
  components: {
    ModalCarrusel,
  },
  data() {
    return {
      mostrarModal: false,
    };
  },
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