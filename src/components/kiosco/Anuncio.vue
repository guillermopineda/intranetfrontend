<template>
  <div id="pol">
    <b-container
      class="shadow-lg rounded p-4 mx-0 my-5 bg-light"
       :id="anuncio.id"
      @click="mostrarModal = !mostrarModal"
     
    >
      <b-row class="justify-content-between h-100">
        <b-col cols="6" class="h4 pt-4 pl-4 mt-2" align-self="start">
          <p id="letraMuro">{{ anuncio.atencion }}</p>
        </b-col>
        <b-col cols="4" align-self="end">
          <img
            class="mx-auto img-fluid"
            src="@/assets/anuncio.png"
            alt="Logo GN10"
          />
        </b-col>
      </b-row>
    </b-container>
    <Modala :mostrarModal="mostrarModal" :anuncio="anuncio" />
  </div>
</template>


<script>
import Modala from "./Modala";
export default {
  name: "Anuncio",
  props: ["anuncio"],
  components: {
    Modala,
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

#letraMuro {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: larger;
}

@media only screen and (max-width: 576px) {
  #letraMuro {
    font-size: medium;
  }
}
</style>