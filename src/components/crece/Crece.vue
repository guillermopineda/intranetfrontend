<template>
  <b-container>
    <b-row class="text-center">
      <b-col cols="12">
        <h2 class="font-weight-bold py-5">CRECE CON GN10</h2>
      </b-col>
    </b-row>
    <b-row class="text-justify">
      <b-col cols="12">
        <h6 class="pb-5 pt-2 text-justify">
          GN10 con el objetivo de hacerte crecer y desarrollar al máximo tus
          habilidades, crea "CRECE CON GN10", por lo que en esta sección podrás
          conocer las nuevas vacantes que se van generando día a día dentro de
          las empresas del Grupo GN10, también encontrarás la información
          necesaria que te permitirá conocer este proceso y los pasos para
          realizar tu postulación.
        </h6>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">CONOCE EL PROCESO</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="p-md-5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://app.powerbi.com/reportEmbed?reportId=3fd856d3-d37e-48f4-a723-2efb7b55464b&autoAuth=true&ctid=3668d871-63f9-46b2-beeb-6f0617ff1f3d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
        ></b-embed>
      </b-col>
    </b-row>

    <b-row class="text-center">
      <b-col cols="12">
        <h4 class="font-weight-bold py-5">VACANTES</h4>
      </b-col>
    </b-row>

    <b-row class="justify-content-around">
      <b-col cols="11" md="4" class="tarjeta py-4 my-2">
        <b-row>
          <b-col>
            <b-card
              title="TITULO VACANTE"
              img-src="https://capitalpeople.mx/static/img/blog-images/Dise%C3%B1o_sin_t%C3%ADtulo_80.png"
              img-alt="Crece con GN10"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 text-center"
            >
              <b-card-text class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum assumenda rerum natus similique sequi porro doloremque expedita 
                reprehenderit qui, alias itaque dolor tenetur ad ex. Fugiat necessitatibus 
                amet saepe eligendi!
              </b-card-text>

              <b-button href="#" class="btn-primary bg-primary">Postularme</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>


<b-col cols="11" md="4" class="tarjeta py-4 my-2">
        <b-row>
          <b-col>
            <b-card
              title="TITULO VACANTE"
              img-src="https://capitalpeople.mx/static/img/blog-images/Dise%C3%B1o_sin_t%C3%ADtulo_80.png"
              img-alt="Crece con GN10"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 text-center"
            >
              <b-card-text class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum assumenda rerum natus similique sequi porro doloremque expedita 
                reprehenderit qui, alias itaque dolor tenetur ad ex. Fugiat necessitatibus 
                amet saepe eligendi!
              </b-card-text>

              <b-button href="#" class="btn-primary bg-primary">Postularme</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="11" md="4" class="tarjeta py-4 my-2">
        <b-row>
          <b-col>
            <b-card
              title="TITULO VACANTE"
              img-src="https://capitalpeople.mx/static/img/blog-images/Dise%C3%B1o_sin_t%C3%ADtulo_80.png"
              img-alt="Crece con GN10"
              img-top
              tag="article"
              style="max-width: 25rem;"
              class="mb-2 text-center"
            >
              <b-card-text class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum assumenda rerum natus similique sequi porro doloremque expedita 
                reprehenderit qui, alias itaque dolor tenetur ad ex. Fugiat necessitatibus 
                amet saepe eligendi!
              </b-card-text>

              <b-button href="#" class="btn-primary bg-primary">Postularme</b-button>
            </b-card>
          </b-col>
        </b-row>
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
  name: "Crece",
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


.btn {
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  font-weight: bold;
  font-size: large;
  margin: .5rem;
  min-width: 100%;
}

.bg-primary {
  background-color: #185632 !important;
}

.btn-primary {
  color: #fff;
  background-color: #185632;
  border-color: #185632;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  color: #185632;
  background-color: #fff !important;
  border-color: #185632;
}

.btn-primary:active {
  color: #185632 !important;
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
}

.btn-primary:focus {
  color: #185632 !important;
  background-color: rgba(255,255,255, 0.95) !important;
  border-color: rgba(28, 86, 50, 0.1) !important;
  box-shadow: 0 0 0 0.2rem rgba(28, 86, 50, 0.5) !important;
}
</style>