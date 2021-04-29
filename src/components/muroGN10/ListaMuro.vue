<template>
  <div id="pol">
    <b-img
      :id="comunicadoMuro.id"
      :src="comunicadoMuro.imagen_pequena"
      @click="mostrarModal = !mostrarModal"
      class="h-100 w-100 rounded"
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

.tarjetaComunicado{
    background-color:#ffffff;
    height: 20rem;
}

.tarjetaComunicado:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}
.tarjetaComunicado:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

@media only screen and (max-width: 992px) {
  #letraMuro {
    font-size: large;
  }
  .tarjetaComunicado {
  height: 15rem;
}
}

@media only screen and (max-width: 576px) {
  #letraMuro {
    font-size: medium;
  }
  .tarjetaComunicado {
  height: 150rem;
}
}
</style>