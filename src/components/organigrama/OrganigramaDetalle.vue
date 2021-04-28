<template>
  <b-modal
    v-model="mostrarOrg"
    title="Organigrama"
    hide-footer
    scrollable
    size="lg"
  >
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 10px #e5e5e5"
      fade
      :interval="5000"
      indicators
      no-hover-pause
    >
      <b-carousel-slide
        v-for="fotoOrg in compania.imagenes"
        :key="fotoOrg.unidad_de_negocio"
        :img-src="fotoOrg.imagen"
      ></b-carousel-slide>
    </b-carousel>
    <b-row class="text-center">
      <b-col cols="12">
        <hr />
        <p id="letraModal" class="letra">{{ compania.subtitulo }}</p>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: "OrganigramaDetalle",
  props: ["empleadoData", "mostrarOrganigrama", "compania"],
  computed: {
    mostrarOrg: {
      get() {
        return this.mostrarOrganigrama;
      },
      set(valor) {
        return valor.mostrarOrganigrama;
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