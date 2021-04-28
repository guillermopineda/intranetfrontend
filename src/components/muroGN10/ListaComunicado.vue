<template>
  <div id="pol">
       <b-container 
       class="shadow-sm rounded p-6 mx-2 tarjetaComunicado" 
       :id="comunicado.id" 
       @click="mostrarModal = !mostrarModal"> 
           <b-row class="justify-content-between h-100">
                 <b-col cols="6" class="h4 pt-4  mt-2  pl-4" align-self="start">
                   <p id="letraMuro"> {{comunicado.titulo}}</p>
               </b-col>
               <b-col cols="4"   align-self="end" >
                   <img  class="mx-auto img-fluid" src="../../assets/logo.png" alt="Logo GN10">
               </b-col>
           </b-row>
       </b-container>
       <Modali  :mostrarModal="mostrarModal" :comunicado="comunicado" />
  </div>
  
</template>

<script>
import Modali from "@/components/muroGN10/Modali";
export default {
  name: "ListaComunicado",
  props: ["comunicado"],
  components: {
      Modali,
  },
  data(){
      return {
          mostrarModal: false,
      }
  }
};
</script>



<style scoped>

#pol {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
}


#letraMuro{
    color:#282828;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: xx-large;
    
}
@media only screen and (max-width: 992px) {
#letraMuro{
    
    font-size: large;
}
}

@media only screen and (max-width: 576px) {
#letraMuro{
    
    font-size: medium;
}
}

.tarjetaComunicado{
    background-color:#ffffff;
}

.tarjetaComunicado:focus {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}
.tarjetaComunicado:hover {
  background-color: #fcfcfc;
  outline-color: #e5e5e5 !important;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(87, 54, 85, 0.4);
}

</style>