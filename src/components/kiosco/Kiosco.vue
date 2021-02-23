<template>
    <b-container id="marca" fluid>
        <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">KIOSCO</h2>
      </b-col>
    </b-row>
       <b-row class="mt-4">
      <b-col class="mx-0 px-0">
        <Footer />
      </b-col>
    </b-row>
    </b-container>
</template>

<script>
import Footer from "../Footer"
export default {
    name: "Kiosco",
    components:{
        Footer,
    }
    
}
</script>


<style scoped>
#marca {
  background-image: url("../../assets/fondo.png");
  color: #282828;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}


</style>