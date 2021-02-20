<template>
  <b-container id="footer">
    <b-row >
      <b-col cols="12" md="6">
        <b-row>
          <b-col cols="12" class="h4 py-4">
            <p id="letraFooter">GN10</p>
          </b-col>
          <b-col cols="12" class="h6 py-4">
              <a href="https://goo.gl/maps/6dmtQX2iDp67ENB46" target="blank">
            <p id="letraFooter">
              Herschel 152, Anzures, Miguel Hidalgo Ciudad de México, CP. 11590,
            </p>
            </a>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="6" class="p-md-5" >
        <b-embed 
          type="iframe"
          aspect="1by1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.490572981784!2d-99.18376608545111!3d19.434404786883245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8adace42923%3A0x6f92d3c87e3d14a5!2sGN10!5e0!3m2!1ses!2smx!4v1613591679193!5m2!1ses!2smx" 
          
    
        ></b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  background-color: #e5e5e5;
}

#letraFooter {
  color: #185632;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}


a{
    text-decoration: none;
}

@media only screen and (min-width: 992px) {
  #letraFooter {
    font-size: 1.5rem;
  }

}



</style>