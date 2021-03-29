<template>
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">ORGANIGRAMA</h2>
      </b-col>
    </b-row>
    <div v-for="(compania, i) in companias" :key="compania.id">
      <b-row
        class="justify-content-between rounded sombra my-3"
        v-b-toggle="'accordion-compania.id' + i"
        align-v="center"
      >
        <b-col cols="6" class="h4 pt-4 pl-5">
          <p>
            <strong>{{ compania.subtitulo }} </strong>
          </p>
        </b-col>
        <b-col cols="4" md="3">
          <img
            class="mx-auto img-fluid"
            :src="compania.imagen"
            :alt="compania.titulo"
          />
        </b-col>
        <Empleado
          :empleadoDatas="empleadoDatas[i]"
          :compania="compania"
          :i="i"
        />
      </b-row>
    </div>
    <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import gnService from "@/services/empleados/gnService";
import Empleado from "@/components/organigrama/Empleado";
import Footer from "../Footer";
export default {
  name: "Organigrama",
  components: {
    Empleado,
    Footer,
  },
  data() {
    return {
      companias: [],
      empleadoDatas: {},
      loading: false,
    };
  },
  created() {
    this.loading = true;
    gnService.getEmpleados().then((res) => {
      let companias = res.data;
      var temp = [];
      let empleadoDatas = {};
      companias.map((em) => {
        em.unidad_de_negocio.map((item) => {
          if (temp.find((ii) => ii.id == item.id)) return;
          temp.push(item);
        });
      });
      for (let index = 0; index < temp.length; index++) {
        const element = temp[index];
        var empleadoDatasAry = [];
        for (let j = 0; j < companias.length; j++) {
          const ele = companias[j];
          let flag = true;
          if (ele.unidad_de_negocio) {
            ele.unidad_de_negocio.forEach((category) => {
              if (flag) {
                if (category.id == element.id) {
                  empleadoDatasAry.push(ele);
                  flag = false;
                }
              }
            });
          }
        }
        empleadoDatas[index] = empleadoDatasAry;
      }
      this.companias = temp;
      this.empleadoDatas = empleadoDatas;
    });
    setTimeout(() => (this.loading = false), 1000);
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
.sombra:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
}
.sombra:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(87, 54, 85, 0.4);
}


</style>