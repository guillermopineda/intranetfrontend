<template>
  <b-row>
    <b-button-group size="sm" class="w-100">
      <b-button @click="servicioFormato">FORMATOS</b-button>
      <b-button @click="servicioPolitica">POLÍTICAS</b-button>
      <b-button @click="servicioLogotipo">LOGOTIPOS</b-button>
      <b-button @click="servicioAviso">AVISO OPORTUNO</b-button>
    </b-button-group>
  </b-row>
</template>


<script>
export default {
  name: "Descarga",
  data() {
    return {
      buscarFormato: "Formato",
      buscarPolitica: "Política",
      buscarLogotipos: "Logotipo",
      buscarAviso:"",
      documentos: [],
    };
  },
  methods: {
    servicioFormato() {
      this.$emit("buscarDocumento", this.buscarFormato);
    },
    servicioPolitica(){
      this.$emit("buscarDocumento", this.buscarPolitica);
    },
    servicioLogotipo(){
      this.$emit("buscarDocumento", this.buscarLogotipos);
    },
    servicioAviso(){
      this.$emit("buscarDocumento", this.buscarAviso);
    }
  },
};
</script>


<style scoped>

.btn-secondary {
  color: #185632;
  font-weight: 600;
  padding-bottom: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  border: none;
  background-color: transparent;
  box-shadow: transparent;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0% 0.3rem;
  transition: background-size 1s ease;
}

.btn-secondary:hover {
  color: #185632;
  border: none;
  background-color: #e5e5e5;
  box-shadow: none;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #185632;
  border: none;
  background-color: #e5e5e5;
  box-shadow: none;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease;
}

.btn-secondary:focus {
  color: #185632;
  border: none;
  box-shadow: none;
  background-color: #cccccc;
  background-image: linear-gradient(to right, #573655, #573655);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 80% 0.3rem;
  transition: background-size 1s ease, background-color 1s ease;
}

@media only screen and (min-width: 992px) {
  .btn-secondary {
    font-size: 1.5rem;
    padding-bottom: 0.8rem;
  }

  .fa-lg {
    font-size: 2.5rem;
    line-height: 1rem;
  }
}

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

::v-deep #btnModal {
  border-radius: 0 1rem 1rem 0;
  font-size: medium;
  color: #fff;
  background-color: #185632;
  border-color: #185632;
  transition: all 0.3s ease;
  padding: 0 1rem;
  background-image: none;
}

::v-deep #inline-form-input-buscar {
  border-radius: 1rem 0 0 1rem;
  font-size: medium;
  color: #282828 !important;
}

::v-deep #inline-form-input-buscar:focus {
  color: #282828 !important;
  border-color: #e5e5e5;
  box-shadow: 2px 2px 2px 1px rgba(87, 54, 85, 0.2);
}

</style>