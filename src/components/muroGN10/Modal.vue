<template>
  <div>
    <b-modal
      v-model="mostrar"
      :title="img.tags"
      hide-footer
      scrollable
      size="xl"
    >
      <b-conatiner>
        <b-row class="px-2">
          <b-col class="h6" cols="3">
            <p>Para:</p>
          </b-col>
          <b-col class="h5" cols="9">
            <small> {{ img.tags }}</small>
          </b-col>
          <b-col class="h6" cols="3">
            <p>Copia a:</p>
          </b-col>
          <b-col class="h5" cols="9">
            <small> {{ img.tags }}</small>
          </b-col>

          <b-col class="h6" cols="3">
            <p>Fecha:</p>
          </b-col>
          <b-col class="h5" cols="9">
            <small> {{ img.tags }}</small>
          </b-col>

          <b-col class="h6" cols="3">
            <p>Asunto:</p>
          </b-col>
          <b-col class="h5" cols="9">
            <small> {{ img.tags }}</small>
          </b-col>
          <b-col cols="12" class="h-6 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              magni omnis! Saepe sequi animi eaque id. Eum inventore esse eos
              amet fuga saepe veritatis quisquam voluptatum earum, qui quibusdam
              assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cum, magni omnis! Saepe sequi animi eaque id. Eum inventore
              esse eos amet fuga saepe veritatis quisquam voluptatum earum, qui
              quibusdam assumenda. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum, magni omnis! Saepe sequi animi eaque id.
              Eum inventore esse eos amet fuga saepe veritatis quisquam
              voluptatum earum, qui quibusdam assumenda.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Cum, magni omnis! Saepe sequi
              animi eaque id. Eum inventore esse eos amet fuga saepe veritatis
              quisquam voluptatum earum, qui quibusdam assumenda. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cum, magni omnis!
              Saepe sequi animi eaque id. Eum inventore esse eos amet fuga saepe
              veritatis quisquam voluptatum earum, qui quibusdam assumenda.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              magni omnis! Saepe sequi animi eaque id. Eum inventore esse eos
              amet fuga saepe veritatis quisquam voluptatum earum, qui quibusdam
              assumenda.
            </p>
          </b-col>
          <b-col cols="12" class="text-center">
            <img
              class="mx-auto img-fluid"
              src="../../assets/logo.png"
              alt="Logo GN10"
            />
          </b-col>
          <b-col cols="12" class="h-6 text-justify">
            <p>Agradecemos su comprensión y atención, un cordial saludo.</p>
          </b-col>
          <b-col cols="12" class="h-6 text-center">
            <br />
            <p class="py-0 my-0"><strong> Atentamente</strong></p>

            <p class="py-0 my-0">
              <small> {{ img.tags }}</small>
            </p>
            <p class="py-0 my-0">
              <small> {{ img.tags }} </small>
            </p>
          </b-col>
        </b-row>
      </b-conatiner>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["img", "mostrarModal"],
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