<template>
  <b-container id="letraFormulario" class="container bg-white p-md-5">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="8" class="border px-md-5 rounded">
        <h2
          class="display-6 font-weight-bold py-5"
          align="center"
          style="color: #282828"
        >BUZÓN GN10
        </h2>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nombre"
              type=""
              placeholder="Ingresa nombre completo"
              required
            ></b-form-input>
            <small class="text-muted"
              >Tu información personal es confidencial.</small
            >
          </b-form-group>
          <label for="textarea">Mensaje:</label>
          <b-form-textarea
            id="textarea"
            v-model="form.mensaje"
            placeholder="Escribe tu mensaje, sugerencia o queja"
            rows="8"
            required
          ></b-form-textarea>

          <b-form-group id="input-group-1" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-1"
              :aria-describedby="ariaDescribedby"
              required
            >
              <br />
              <b-form-checkbox value="true">No soy un robot</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" class="btn-primary bg-primary"
            >Enviar</b-button
          >
          <b-button type="reset" class="btn-primary bg-primary"
            >Borrar</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      form: {
        nombre: "",
        checked: [],
        mensaje: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.form.nombre = "";
      this.form.checked = [];
      this.form.mensaje = "";
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.nombre = "";
      this.form.checked = [];
      this.form.mensaje = "";
    },
  },
};
</script>

<style scoped>
#letraFormulario {
  color: #e5e5e5;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

input,
::placeholder {
  color: #e5e5e5;
}
textarea {
  color: #282828 !important;
}

.text-muted {
  color: #e5e5e5 !important;
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
  margin: .5rem;
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
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: #185632 !important;
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(28, 86, 50, 0.5) !important;
}
</style>

