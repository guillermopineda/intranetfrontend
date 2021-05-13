<template>
  <b-collapse
    :id="'accordion-compania.id' + i"
    :accordion="'compania.id-accordion' + i"
    class="collapse-div"
  >
   <b-container 
      v-for="(empleadoData,index) in compania.empleados"
      :key="empleadoData.id"
    > 
      <b-row
        class="justify-content-between border-top  tarjeta my-0"
        align-v="center"
        align-h="end"
        v-b-modal="'accordion-empleadoData.id' + index + i"
        @click.stop
        
      >
        <b-col cols="7" class="h5 pt-4 pl-md-5 pl-3 m-0">
          <p>{{ empleadoData.nombre }}</p>
          <p id="letraPuesto">{{ empleadoData.puesto }}</p>
        </b-col>
        <b-col cols="4" md="2">
          <b-avatar :src="empleadoData.foto" class="mt-0 avatar"></b-avatar>
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
  props: ["i","compania"],
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
  height: 6rem;
  background-color: white;
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

  .avatar{
    width: 4rem;
    height: 4rem;
  }


@media only screen and (max-width: 576px) {
  #letraPuesto {
    font-size: .9rem;
  }
    p {
    font-size: .9rem;
  }
}

@media only screen and (max-width: 378px) {
  #letraPuesto {
    font-size: .7rem;
  }
    p {
    font-size: .7rem;
    margin-bottom: .4rem;
  }
  .avatar{
    width: 3rem;
    height: 3rem;
  }
}

.collapse-div {
  width: 100%;
}

.border-top {
    border-top: 1px dashed #573655 !important;
}
</style>