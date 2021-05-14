<template>
  <b-container id="universidad" align="center">
    <b-row >
      <b-col cols="12" class="h6 pt-4 mt-4"  align-self="center" >
        <p id="letraUniversidad" >UNIVERSIDAD</p>
      </b-col>
      <b-col cols="6" class="mx-auto pb-4" >
        <a href="https://gn10.capitalacademy.mx/" target="blank">
          <img
            id="imagenUniversidad"
            class=" img-fluid "
            src="../../assets/logo.png"
            alt="Universidad GN10"
          />
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Universidad",
};
</script>

<style scoped>
#universidad {
  background-color: #e5e5e5;
 
}

#letraUniversidad {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  
}



#imagenUniversidad{
    margin-top: -45px;
}

@media only screen and (min-width: 992px) {
  #letraUniversidad {
    font-size: 2rem;
  }


}
</style>