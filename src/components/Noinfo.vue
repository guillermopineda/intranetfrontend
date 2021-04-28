<template>
  <b-container class="shadow-sm rounded p-4 mx-0 my-5 bg-light">
    <b-row class="justify-content-between h-100">
      <b-col cols="6" class="h4 pt-4 pl-4" align-self="start">
        <p id="letraMuro">SIN INFORMACIÓN DISPONIBLE, VUELVE PRONTO...</p>
      </b-col>
      <b-col cols="4" align-self="end">
        <img
          class="mx-auto img-fluid"
          src="../assets/logo.png"
          alt="Logo GN10"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: "Noinfo"
};
</script>


<style scoped>

#letraMuro {
  color: #282828;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
</style>