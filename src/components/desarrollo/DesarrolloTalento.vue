<template id="marca" fluid>
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
          src="https://app.powerbi.com/reportEmbed?reportId=e9c06129-df64-4d0c-9462-c73a38d441ef&autoAuth=true&ctid=3668d871-63f9-46b2-beeb-6f0617ff1f3d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
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
          src="https://app.powerbi.com/reportEmbed?reportId=30524785-86ab-4e7c-a0f7-ef452488da78&autoAuth=true&ctid=3668d871-63f9-46b2-beeb-6f0617ff1f3d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
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
}
</style>