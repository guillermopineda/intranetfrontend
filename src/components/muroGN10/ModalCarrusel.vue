<template>
  <div>
    <b-modal
      v-model="mostrar"
      :title="comunicadoMuro.titulo"
      hide-footer
      scrollable
      size="lg"
    >
      <b-container v-if="comunicadoMuro.video === null">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 10px #e5e5e5"
          fade
          :interval="3000"
          indicators
        >
          <b-carousel-slide
           
            :img-src="comunicadoMuro.imagen_grande"
          ></b-carousel-slide>
        </b-carousel>
        <b-row class="text-center">
          <b-col cols="12">
            <hr />
            <a :href="comunicadoMuro.url_consulta" target="blank">
              <p id="letraModal" class="letra">Conoce más...</p>
            </a>
          </b-col>
        </b-row>
      </b-container>
      <b-container v-else>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="comunicadoMuro.video"
          allowfullscreen
        ></b-embed>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalCarrusel",
  props: ["comunicadoMuro", "mostrarModal"],
  computed: {
    mostrar: {
      get() {
        return this.mostrarModal;
      },
      set(valor) {
        return valor.mostrarModal;
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
  color: #185632;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>