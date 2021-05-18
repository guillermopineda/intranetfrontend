<template>
  <b-container>
    <b-navbar toggleable type="white" class="fixed-top">
      <b-container class="py-3 mx-3" fluid>
        <b-navbar-brand href="/">
          <img src="./assets/logo.png" width="100" alt="Logo GN10" />
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse" style="border: none">
          <template #default="{ expanded }">
            <font-awesome-icon
              v-if="expanded"
              :icon="['fas', 'times']"
              size="2x"
              style="color: #185632"
            />
            <font-awesome-icon
              v-else
              :icon="['fas', 'bars']"
              size="2x"
              style="color: #185632"
            />
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item link v-for="m in menu" :key="m.nombre" :to="m.ruta"
              >{{ m.nombre }}
            </b-nav-item>
           
            <b-form @submit="cerrar">
               <hr> 
              <b-button class="btnCerrar" type="submit"
                >{{ cerrarSesion }}
              </b-button>
            </b-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view></router-view>
  </b-container>
</template>

<script>
import gnService from "@/services/login/gnService";
export default {
  name: "App",
  components: {},
  data() {
    return {
      cerrarSesion: "Cerrar Sesión",
      menu: [
        { ruta: "/comunicados", nombre: "Comunicados", icono: "mdi-folder" },
        { ruta: "/bienestar", nombre: "Bienestar", icono: "mdi-folder" },
        { ruta: "/fundacion", nombre: "Fundación", icono: "mdi-folder" },
        { ruta: "/muro", nombre: "Muro", icono: "mdi-folder" },
        { ruta: "/nosotros", nombre: "Nosotros", icono: "mdi-folder" },
        { ruta: "/organigrama", nombre: "Organigrama", icono: "mdi-folder" },
        {
          ruta: "/kiosco",
          nombre: "Kiosco",
          icono: "mdi-folder",
        },
        {
          ruta: "/creceGN10",
          nombre: "Crece con GN10",
          icono: "mdi-folder",
        },
        {
          ruta: "/biblioteca",
          nombre: "Biblioteca",
          icono: "mdi-folder",
        },
      ],
    };
  },
  computed: {
    userLogged() {
      return gnService.getUserLogged();
    },
  },
  methods: {
    cerrar() {
      return gnService.deleteUser();
    },
  },
};
</script>


<style scoped>
.nav-item.nav-item.nav-item a {
  color: #185632;
  font-size: large;
  transition: all 0.8s ease;
  line-height: 1;
  padding: .5rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}
.nav-item.nav-item.nav-item a:hover {
  background-color: rgba(229, 229, 229, 0.1);
  color: #185632;
  font-weight: 600;
}

.navbar {
  background-color: rgba(229, 229, 229, 0.9);
  height: auto;
  backdrop-filter: blur(15px) saturate(25%);
}

.sombra {
  background-color: white;
  border-color: #e5e5e5;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.2);
}
.sombra:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

.sombra:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

.btn {
  border: none;
  padding: 0 1.5rem;
  font-size: large;
  font-weight: 600;
  margin: 0rem;
  min-width: 100%;
}

.btn-secondary {
  color: #573655;
  background-color: #e5e5e5;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgba(229, 229, 229, 0.1);
  color: #573655;
  font-weight: bolder;
}

.btn-secondary:active {
  color: #573655 !important;
  background-color: rgba(229, 229, 229, 0.1);
  border: none;
}

.btn-primary:focus {
  color: #573655 !important;
  background-color: rgba(229, 229, 229, 0.1);
  border: none;
}
hr {
  height: 1px;
  width: 85%;
  background-color: #573655;
}

@media only screen and (min-width: 768px) {
  .nav-item.nav-item.nav-item a {
  font-size: x-large;
  padding: .3rem 1.5rem;
}
  .btn {
  font-size: x-large;
   padding: .5rem 1.5rem;
   margin: 0;

}
hr {
  width: 50%;
}

}

</style>
