<template>
  <div v-if="!archiveNote" id="pol">
    <b-img
      :id="img.id"
      :src="img.largeImageURL"
      @click="mostrarModal = true"
      class="h-100 w-100"
      rounded
    >
    </b-img>
    <Modal :mostrarModal="mostrarModal" :img="img" />,

  </div>

   <div v-else id="pol" >
       <b-container class="shadow-lg rounded p-6 mx-2 bg-light" > 
           <b-row class="justify-content-between h-100">
                 <b-col cols="6" class="h4 pt-4 pl-4" align-self="start">
                   <p id="letraMuro">SIN INFORMACIÓN DISPONIBLE, VUELVE PRONTO...</p>
               </b-col>
               <b-col cols="2"   align-self="end" >
                   <img  class="mx-auto img-fluid" src="../../assets/logo.png" alt="Logo GN10">
               </b-col>
           </b-row>
       </b-container>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "Imagen",
  props: ["img", "index"],
  components: {
    Modal,
  },
  methods: {
    showModal() {
      this.$refs[this.img.id].show();
    },
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

#letraMuro{
    color:#282828;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    
}
</style>