<template>
  <b-container>

    <router-view></router-view>
  </b-container>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      menu: [
        { ruta: "/", 
          nombre: "Home", 
          icono: "mdi-folder" 
        },
        { ruta: "/muroGN10", 
          nombre: "Muro GN10", 
          icono: "mdi-folder" 
        },
        { ruta: "/nosotros",
          nombre: "Nosotros", 
          icono: "mdi-folder" 
        },
        { ruta: "/organigrama", 
          nombre: "Organigrama", 
          icono: "mdi-folder" },
        {
          ruta: "/servicioPersonal",
          nombre: "Servicios Personal",
          icono: "mdi-folder",
        },
        {
          ruta: "/desarrolloTalento",
          nombre: "Desarrollo de Talento",
          icono: "mdi-folder",
        },
        {
          ruta: "/creceGN10",
          nombre: "Crece con GN10",
          icono: "mdi-folder",
        },
        {
          ruta: "/kiosco",
          nombre: "Kiosco",
          icono: "mdi-folder",
        }
        
      ],
    };
  },
};
</script>


<style >
.nav-item.nav-item.nav-item a {
  color: #185632;
  font-size: xx-large;
  transition: all 0.8s ease;
  line-height: 1;
  padding: 1rem 1.5rem;
  text-align: center;
}
.nav-item.nav-item.nav-item a:hover {
  background-color: rgba(229, 229, 229, 0.1);
  color: #185632;
  font-weight: 600;
}

.navbar {
  background-color: #e5e5e5;
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
</style>
