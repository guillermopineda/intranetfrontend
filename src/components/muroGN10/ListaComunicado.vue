<template>
  <div id="pol">
    <b-img
      :id="comunicado.id"
      :src="comunicado.logo"
      @click="mostrarModal=true"
      class="h-100 w-100"
      rounded
    ></b-img>
    <Modal :mostrarModal="mostrarModal" :comunicado="comunicado" />
    
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "ListaComunicado",
  props: ["comunicado"],
  components: {
      Modal,
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