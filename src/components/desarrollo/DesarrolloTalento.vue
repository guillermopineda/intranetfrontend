<template >
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">DESARROLLO DE TALENTO</h2>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">ANTIGÜEDAD DE PUESTO</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="p-md-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWE0NTgwMzQtMThjNS00MGQ3LTkzY2MtOWU3Nzk2OWQwOWZmIiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">GENERACIONES GN10</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="p-md-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiODFhMDkxYjUtZTY4Zi00NmZhLWI0NjEtNzIwNDg1MTkzMzNkIiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
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
import Footer from "../Footer";
export default {
  name: "DesarrolloTalenbto",
  components: {
    Footer,
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
  margin-top: 8rem;
}
</style>