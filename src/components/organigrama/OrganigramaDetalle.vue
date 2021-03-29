<template>
    <b-modal 
    v-model="mostrarOrg"
    title="ORGANIGRAMA" 
    hide-footer size="lg" 
    >
     <img
        class="mx-auto img-fluid"
        :src="empleadoData.image_organigrama"
        alt="Organigrama"
      />
      <p class="letra"> {{compania.subtitulo}} </p>
    </b-modal>
</template>

<script>
export default {
    name: "OrganigramaDetalle",
     props: [
    "empleadoData",
    "mostrarOrganigrama",
    "compania"
  ],
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
    
}
</script>

<style scoped>

.letra {
  color: #282828;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
}

::v-deep .modal-header {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  border: none;
}

::v-deep .modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
}



</style>