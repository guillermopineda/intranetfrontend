<template>
  <b-collapse
    :id="'accordion-compania.id' + i"
    :accordion="'compania.id-accordion' + i"
    class="collapse-div"
  >
   <b-container 
      v-for="(empleadoData,index) in empleadoDatas"
      :key="empleadoData.id"
    > 
      <b-row
        class="justify-content-between  tarjeta my-3"
        align-v="center"
        align-h="end"
        v-b-modal="'accordion-empleadoData.id' + index + i"
        @click.stop
        
      >
        <b-col cols="6" class="h5 pt-4 pl-5 m-0">
          <p>{{ empleadoData.nombre }}</p>
          <p id="letraPuesto">{{ empleadoData.puesto }}</p>
        </b-col>
        <b-col cols="3" md="2">
          <b-avatar :src="empleadoData.foto" size="4rem"></b-avatar>
        </b-col>
      </b-row>
      <EmpleadoDetalle
        :mostrarModal="mostrarModal"
        :empleadoData="empleadoData"
        :index="index"
        :i="i"
        :compania="compania"
        
      />
    </b-container>
  </b-collapse>
</template>

<script>
import EmpleadoDetalle from "@/components/organigrama/EmpleadoDetalle";
export default {
  name: "Empleado",
  props: ["empleadoDatas","i","compania"],
  components: {
    EmpleadoDetalle,
  },
  data() {
    return {
      mostrarModal: false,

    };
  },
};
</script>

<style scoped>
.tarjeta {
  min-height: 15vh;
  background-color: white;
  box-shadow:  0px 1px rgba(87, 54, 85, 0.8);
}
.tarjeta:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
}
.tarjeta:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
}

#letraPuesto {
  color: rgba(87, 54, 85, 0.6);
  
}

@media only screen and (max-width: 576px) {
  #letraPuesto {
    font-size: 1rem;
  }
    p {
    font-size: 1rem;
  }
}




.collapse-div {
  width: 100%;
}
</style>