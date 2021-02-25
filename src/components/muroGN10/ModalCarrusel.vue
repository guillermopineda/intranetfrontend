<template>
  <div>
    <b-modal
      v-model="mostrar"
      :title="io.tags"
      hide-footer
      scrollable
      size="lg"
    >
      <b-container>
        <b-carousel
          v-if="io.type == 'photo'"
          id="carousel-fade"
          style="text-shadow: 0px 0px 10px #e5e5e5"
          fade
          :interval="3000"
          indicators
        >
          <b-carousel-slide
            :caption="io.tags"
            :img-src="io.userImageURL"
          ></b-carousel-slide>
        </b-carousel>
        <b-embed
          v-else
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/HObwcGNE4HA"
          allowfullscreen
        ></b-embed>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalCarrusel",
  props: ["io", "mostrarModal"],
  computed: {
    mostrar: {
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
</style>