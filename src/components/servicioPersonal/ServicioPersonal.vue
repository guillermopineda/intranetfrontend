<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">SERVICIO AL PERSONAL</h2>
      </b-col>
    </b-row>
    <b-link href="https://global.rhpay.com/" target="blank">
      <b-row
        class="justify-content-between rounded sombra my-3"
        align-v="center"
      >
        <b-col cols="6" class="h4 pt-4 pl-5">
          <p>GLOBAL RHPAY</p>
        </b-col>
        <b-col cols="4" md="3" align="center">
          <font-awesome-icon
            class="iconoIr"
            :icon="['fas', 'globe-americas']"
            size="3x"
          />
        </b-col>
      </b-row>
    </b-link>

    <b-link href="https://www.humaneland.net/login/login.xhtml" target="blank">
      <b-row
        class="justify-content-between rounded sombra my-3"
        align-v="center"
      >
        <b-col cols="6" class="h4 pt-4 pl-5">
          <p>RECIBOS Y VACACIONES</p>
        </b-col>
        <b-col cols="4" md="3" align="center">
          <font-awesome-icon
            class="iconoIr"
            :icon="['fas', 'donate']"
            size="3x"
          />
        </b-col>
      </b-row>
    </b-link>
    <b-link href="https://intranet-api-dltuh.ondigitalocean.app/creceGN10" target="blank">
    <b-row class="justify-content-between rounded sombra my-3" align-v="center">
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p>CRECE CON GN10</p>
      </b-col>
      <b-col cols="4" md="3" align="center">
        
          <font-awesome-icon
            class="iconoIr"
            :icon="['fas', 'bullhorn']"
            size="3x"
          />
        
      </b-col>
    </b-row>
    </b-link>
    <hr class="my-5" />

    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">COMITE DE SALUD</h2>
      </b-col>
    </b-row>
    <b-row class="text-justify">
      <b-col cols="12">
        <h6 class="pb-5 pt-2 text-justify">
          Con el objetivo de vigilar, supervisar, y hacer cumplir todos los
          lineamientos del Protocolo de Seguridad Sanitaria de Grandes Empresas.
          <br />
          Cualquier duda o comentario puedes escribir al correo
          <strong>salud-gn10@gn10.com</strong>.
        </h6>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Footer from "../Footer";
export default {
  name: "ServicioPersonal",
  components: {
    Footer,
  },
};
</script>

<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  color: #282828;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-top: 8rem;
}

.subrayado {
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 100% 0.1rem;
}

.iconoIr {
  color: #573655;
}

.iconoIr:focus {
  outline-color: #fff !important;
}

a{
    text-decoration: none;
    color: #282828;
}
</style>