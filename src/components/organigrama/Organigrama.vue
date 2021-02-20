<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">ORGANIGRAMA</h2>
      </b-col>
    </b-row>
    <b-row
      class="justify-content-between rounded sombra my-3"
      v-b-toggle.my-collapse
      align-v="center"
    >
      <b-col cols="6" class="h4 pt-4 pl-5">
        <p><strong>CÓMITE EJECUTIVO GN10</strong></p>
      </b-col>
      <b-col cols="4" md="3">
        <img
          class="mx-auto img-fluid"
          src="../../assets/logo.png"
          alt="Logo GN10"
        />
      </b-col>
    </b-row>

<b-collapse id="my-collapse">

      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle.collapse-1
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>LUIS AGUIRRE</p>
          <p id="letraPuesto">BOARD</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr_1.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>

 </b-collapse>

<b-collapse id="my-collapse">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle.collapse-1
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>EDUARDO MURCIO</p>
          <p id="letraPuesto">BOARD</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr_2.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>


      </b-collapse>

      <b-collapse id="my-collapse">

      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle.collapse-1
        v-b-modal.modal-1
        align-v="center"
        align-h="end"
        
      >
        <b-col cols="6" class="h4 pt-4 pl-5 m-0">
          <p>EDUARDO TERROBA</p>
          <p id="letraPuesto">DIRECTOR RH</p>
        </b-col>
        <b-col cols="3" md="2" v-b-modal.modal-1>
          <b-avatar
            src="https://yosoy.digital/media/fotos/foto_qr.png"
            size="4rem"
          ></b-avatar>
        </b-col>
      </b-row>
     </b-collapse>

    <b-modal id="modal-1" title="Nombre Empleado">
        <b-row class="justify-content-center">
            <b-col cols="12" class=" my-5" align="center">
        <b-avatar
            
            src=""
            size="8rem"
          ></b-avatar>
          </b-col>
          <b-col cols="12" align="center" class="h5">
        <p>
            NOMBRE EMPLEADO
        </p>
          </b-col>
          <b-col cols="12" class="h6 " align="justify">
        <p><strong>Intereses, </strong> Lorem ipsum dolor 
        sit amet, consectetur adipisicing elit. Alias ex 
        soluta in nostrum velit rerum recusandae, deleniti 
        eligendi neque possimus optio aut blanditiis sed 
        quidem est. Non esse sit ullam!</p>
          </b-col>
      </b-row>
    </b-modal>

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
  name: "Organigrama",
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
}

.sombra {
  background-color: white;
  border-color: #e5e5e5;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.2);
}

#letraPuesto {
  color: #e5e5e5;
  font-weight: bold;
  font-size: 1rem;
}

@media only screen and (min-width: 992px) {
  #letraPuesto {
    font-size: 1.5rem;
  }
}
</style>