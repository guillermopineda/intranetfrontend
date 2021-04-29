<template >
  <b-container id="marca" fluid>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold pt-2 pt-mb-5">DESARROLLO DE TALENTO</h2>
      </b-col>
    </b-row>

 <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-font-weight-normal  my-5">HEADCOUNT</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mx-md-2">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiZmRkZDIyMGUtMTMyMC00ZjMwLTk1N2ItOTg1OGZlYzdmMTgwIiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
      </b-col>
    </b-row>


    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-font-weight-normal  my-5">ANTIGÜEDAD DE PUESTO</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mx-md-2">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiM2ZmMmVjYjAtODMxNy00ZjJiLTk1OGMtNGU3YTVhZmY4N2IwIiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-normal  my-5">GENERACIONES GN10</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mx-md-2 ">
        <b-embed
        poster="@/assets/logo.png"
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiOTMyNjZmYWYtMDEwMS00YjI4LTg0YzUtZTE2NTA3NDgxOThlIiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
        ></b-embed>
      </b-col>
    </b-row>


        <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-normal  my-5">SEXO</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mx-md-2 ">
        <b-embed
        poster="@/assets/logo.png"
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiMDU4YjVlYzEtZjYyMy00NWQyLWI1MjAtNWE5ZjI3YzM4Mzc0IiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9&pageName=ReportSectiona27686abbd4a115dc900"
        ></b-embed>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-normal  my-5">PRESENCIA</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mx-md-2 ">
        <b-embed
        poster="@/assets/logo.png"
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDc4NWQ0OTctNzZhNS00MzI3LWFjZDAtYWEyYzY4YTJlOTI4IiwidCI6IjM2NjhkODcxLTYzZjktNDZiMi1iZWViLTZmMDYxN2ZmMWYzZCJ9"
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