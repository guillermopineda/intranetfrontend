<template>
  <div id="letraFormulario">
    <b-modal
      v-model="mostrarModal"
      :title="vacante.titulo"
      hide-footer
      scrollable
      id="modal-vacantes"
    >
      <b-container>
        <b-row class="px-2">
          <b-col class="h6" cols="12">
            <b-form @submit="enviarPostulacion" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Nombre:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  name="name"
                  required
                ></b-form-input>
                <small class="text-muted"
                  >Comienza por tu apellido paterno, materno y nombre</small
                >
                <br />
                <br />
              </b-form-group>
             <template v-if="form.name.length >= 6">
              <b-form-group
                id="input-group-1"
                label="Puesto a Solicitar:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.vacante"
                  name="vacante"
                  required
                ></b-form-input>
                <small class="text-muted"
                  >Por favor copia y vuelve a escribir el nombre de la vacante para
                  poder continuar.</small
                >
                <br />
                <br />
              </b-form-group>
            </template>
            <template v-if="form.vacante === vacante.titulo">
              <b-form-group id="input-group-1" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                  v-model="form.checked"
                  id="form.checked"
                  :aria-describedby="ariaDescribedby"
                  required
                >
                  <br />
                  <b-form-checkbox>Confirmar Postulación</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <br />
             </template>
              <template v-if=" form.checked">
                <b-button
                  type="submit"
                  value="Send"
                  class="btn-primary bg-primary"
                  >Enviar</b-button
                >
                <b-button type="reset" class="btn-primary bg-primary"
                  >Cancelar</b-button
                >
              </template>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ModalVacante",
  data() {
    return {
      cerrarModalVacante: false,
      form: {
        name: "",
        vacante: "",
        checked: false,
      },
    };
  },
  props: ["vacante", "mostrarModalVacante"],
  methods: {
    onReset(e) {
      e.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.vacante = "";
      this.form.checked = false;
      this.$bvModal.hide("modal-vacantes");
    },
    enviarPostulacion(e) {
      e.preventDefault();
      alert("Tu postulación ha sido enviada, Éxito!!.");
      try {
        emailjs.sendForm(
          "service_ruy025b",
          "template_s9k5ppi",
          e.target,
          "user_9kYzuJ3S98QHGgfInPLsA",
          {
            name: this.form.name,
            vacante: this.form.vacante,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.form.name = "";
      this.form.checked = false;
      this.form.vacante = "";
      this.$bvModal.hide("modal-vacantes");
    },
  },
  computed: {
    mostrarModal: {
      get() {
        return this.mostrarModalVacante;
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
  color: #573655;
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

::v-deep .modal-body {
  color: #573655;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

input,
::placeholder {
  color: #282828;
}
textarea {
  color: #282828 !important;
}

.text-muted {
  color: #282828 !important;
}

.form-control:focus {
  color: #282828 !important;
  border-color: #e5e5e5;
  box-shadow: 2px 2px 2px 1px rgba(87, 54, 85, 0.2);
}

.btn {
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: large;
  margin: 0.5rem;
  min-width: 100%;
}

.bg-primary {
  background-color: #185632 !important;
}

.btn-primary {
  color: #fff;
  background-color: #185632;
  border-color: #185632;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  color: #185632;
  background-color: #fff !important;
  border-color: #185632;
}

.btn-primary:active {
  color: #185632 !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: #185632 !important;
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(28, 86, 50, 0.5) !important;
}
</style>