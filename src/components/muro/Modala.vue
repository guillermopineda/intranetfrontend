<template>
  <div>
    <b-modal
      v-model="mostrarA"
      :title="anuncio.atencion"
      hide-footer
      scrollable
      size="lg"
    >
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 10px #e5e5e5"
        fade
        :interval="3000"
        indicators
        no-hover-pause
      >
        <b-carousel-slide
          v-for="foto in anuncio.imagenes"
          :key="foto.id"
          :img-src="foto.imagen"
        ></b-carousel-slide>
      </b-carousel>
      <b-row class="text-center">
        <b-col cols="12">
          <hr />
          <p id="letraModal" class="letra">{{ anuncio.contacto }}</p>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modala",
  data() {
    return {
      cerrarModal: false,
      foto: "",
    };
  },
  props: ["anuncio", "mostrarModal"],
  computed: {
    mostrarA: {
      get() {
        return this.mostrarModal;
      },
      set(valor) {
        return valor;
      },
    },
  },
};
</script>



<style scoped>
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

#letraModal {
  color: #573655;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>