<template>
  <b-container id="marca" fluid>
    <b-row class="justify-content-around">
      <b-col cols="11" md="5" class="login py-4 my-4">
        <b-row>
          <b-col cols="8" class="mx-auto">
            <div>
              <img
                id="login"
                class="img-fluid"
                src="../assets/logo.png"
                alt="Login IntraGN10"
              />
            </div>
          </b-col>
          <b-col cols="12">
            <h4 class="font-weight-bold pt-4 text-center titulo-valores">
              LOGIN
            </h4>
          </b-col>
          <b-col cols="12">
            <h5 class="font-weight-bold py-0 text-center subtitulo-valores">
              INTRAGN10
            </h5>
          </b-col>
          <b-col cols="12">
            <h6 class="pb-5 pt-2 text-justify">
              Bienvenido a IntraGN10, el sitio creado para todos los
              colaboradores de GN10. <br />El objetivo de IntraGN10 es
              ser el canal de comunicación oficial, donde encontrarás contenido
              referente a Comunicados, Bienestar, Fundación, temas en Tendencia.
              <br />Explora en su menú dinámico; Directorio de Colaboradores,
              Buzón GN10, Contenido Corporativo, Desarrollo de Talento,
              Políticas y Formatos, y acceso a las principales aplicaciones del
              GRUPO GN10.
            </h6>
          </b-col>
          <b-col cols="8" class="mx-auto">
            <div>
              <img
                id="login"
                class="img-fluid"
                src="../assets/office.png"
                alt="Login IntraGN10"
              />
            </div>
          </b-col>
          <b-col cols="12" class="py-5">

            <b-button type="submit" class="btn-primary bg-primary text-center" @click="submit"
              >LOGIN</b-button
            >
        
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      checked: false,
    };
  },
  getters: {
    usuarioAutenticado() {
      this.checked = checked;
    },
  },
  methods: {
    submit() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/web/muroGN10");
    },
  },
};
</script>

<style scoped>
#marca {
  background-image: "..assets/fondo.png";
  color: #282828;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.titulo-valores {
  color: #185632;
}

.subtitulo-valores {
  color: #e5e5e5;
}

.login {
  border-color: #e5e5e5;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.2);
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
  background-color: #fff !important;
}

.btn-primary {
  color: #ec3c03;
  background-color: #fff;
  border-color: #ec3c03;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  color: #fff;
  background-color: #ec3c03 !important;
  border-color: #fff;
}

.btn-primary:active {
  color: #fff !important;
  background-color: rgba(236, 60, 3, 0.95) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.btn-primary:focus {
  color: #fff !important;
  background-color: rgba(236, 60, 3, 0.95) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(236, 60, 3, 0.5) !important;
}
</style>