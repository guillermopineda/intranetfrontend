<template>
  <b-container id="fundacion"  align="center"  >
    <b-row  >
      <b-col cols="12" >
        <a href="https://fundaciongn10.com/" target="blank">
        <img
          class="mx-auto img-fluid"
          src="../../assets/fundacion.png"
          alt="Fundación GN10"
        />
        </a>
      </b-col>
      <b-col cols="12" class="h6 pb-4" >
          <p id="letraFundacion">BRINDA AYUDA Y ASISTENCIA A QUIENES LO NECESITAN</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Fundacion",
};
</script>

<style scoped>
#fundacion {
  background-color: #573655;
 
}

#letraFundacion{
    color:white;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    
}


@media only screen and (min-width: 992px) {
  #letraFundacion {
    font-size: 1.5rem;
  }


}
</style>