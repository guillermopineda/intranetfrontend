<template>
  <div>
    <b-modal
      v-model="mostrar"
      :title="comunicado.titulo"
      hide-footer
      scrollable
      size="lg"
      
    >
      <b-conatiner class="letra">
        <b-row class="px-2">
          <b-col class="h6" cols="3">
            <p><strong>Para:</strong></p>
          </b-col>
          <b-col class="h6" cols="9">
            {{ comunicado.para }}
          </b-col>
          <b-col class="h6" cols="3">
            <p><strong>Copia a:</strong></p>
          </b-col>
          <b-col class="h6" cols="9">
            {{ comunicado.copia }}
          </b-col>

          <b-col class="h6" cols="3">
            <p><strong>Fecha:</strong></p>
          </b-col>
          <b-col class="h6" cols="9">
            {{ comunicado.creado | moment("dddd D  MMMM [del] YYYY") }}
          </b-col>

          <b-col class="h6" cols="3">
            <p><strong>Asunto:</strong></p>
          </b-col>
          <b-col class="h6" cols="9">
            {{ comunicado.asunto }}
          </b-col>

          <b-col cols="12" class="h-5 text-justify">
            <br />
            <article
              class="textoComunicado"
              v-html="comunicado.texto"
            ></article>
            <br>
          </b-col>

            <template v-if="comunicado.imagen_comunicado !== null">
            <b-col cols="10" class="mx-auto">
              <img
                class="mx-auto img-fluid"
                :src="comunicado.imagen_comunicado"
                alt="Logo GN10"
              />
              <br>
              <br>
            </b-col>
          </template>

          <b-col cols="12" class="h-6 text-justify">
            <p>Agradecemos su comprensión y atención, un cordial saludo.</p>
          </b-col>
          <b-col cols="12" class="h-5 text-center">
            <br />
            <p class="py-0 my-0"><strong> Atentamente</strong></p>

            <p class="py-0 my-0 h5">
              <small> {{ comunicado.emisor }}</small>
            </p>
          </b-col>
          <template v-if="comunicado.logo !== null">
            <b-col cols="4" class="mx-auto">
              <img
                class="mx-auto img-fluid"
                :src="comunicado.logo"
                alt="Logo GN10"
              />
            </b-col>
          </template>
        </b-row>
      </b-conatiner>
    </b-modal>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Modali",
  data(){
    return {
      cerrarModal: false,
    }
  },
  props: {
    comunicado: {},
    mostrarModal: {},
  },
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
  mounted() {
    moment.locale("es");
  },
};
</script>

<style scoped>
.letra {
  font-family: "Montserrat", sans-serif;
  color: #282828;
  font-size: 1rem;
}

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

.textoComunicado {
  white-space: pre-wrap; /* 👈 this is the important part */
}
</style>