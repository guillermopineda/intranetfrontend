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
        <b-form @submit="enviarCorreo" @reset="onReset">
          
          
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.name"
              name="name"
              placeholder="Ingresa nombre completo"
              required
            ></b-form-input>
            <small class="text-muted"
              >Tu información personal es confidencial</small
            >
          </b-form-group>


          <template v-if="form.name.length >= 6">
          <label for="textarea">Mensaje:</label>
          <b-form-textarea
            id="textarea-1"
            v-model="form.message"
            name="message"
            placeholder="Escribe tu mensaje, sugerencia o queja"
            rows="8"
            required
          ></b-form-textarea>
          </template>
          <p v-else class="alerta" >Por favor ingresa un nombre mayor a 6 caracteres</p>

          
          <template v-if="form.message.length > 10">
          <b-form-group id="input-group-1" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="form.checked"
              :aria-describedby="ariaDescribedby"
              required
            >
              <br />
              <b-form-checkbox >No soy un robot</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
           </template>
          <p v-else-if="form.name.length >= 6" class="alerta" >Por favor ingresa un mensaje mayor a 10 caracteres</p>


          <template v-if="form.checked === true ">
          <b-button  type="submit" value="Send" class="btn-primary bg-primary"
            >Enviar</b-button
          >
          <b-button type="reset" class="btn-primary bg-primary"
            >Borrar</b-button
          >
          </template>
          <p v-else-if="form.message.length > 10" class="alerta" >Por favor marca la casilla para continuar</p>
      
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import  emailjs from 'emailjs-com';
export default {
  name: "Formulario",
  data() {
    return {
      form: {
        name: "",
        checked: false,
        message: "",
      },
    };
  },
  methods: {
    onReset(e) {
      e.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.checked = false;
      this.form.message = "";
    },
    enviarCorreo(e){
      e.preventDefault();
      alert("Muchas gracias por tu mensaje, el Cómite de Ética GN10 te escucha, lee y ayuda.");
      try {
        emailjs.sendForm('service_ruy025b','template_elddntt',e.target,
        'user_9kYzuJ3S98QHGgfInPLsA',{
          name  : this.form.name,
          message : this.form.message
        })
      }
      catch(error){
        console.log({error})
      }
      this.form.name = "";
      this.form.checked = false;
      this.form.message = "";
    }
  },
};
</script>

<style scoped>
.alerta{
  color: rgba(255,5,0,.6);
}

#letraFormulario {
  color: #e5e5e5;
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

