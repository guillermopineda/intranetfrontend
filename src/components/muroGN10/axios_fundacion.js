import axiosFundacion from "axios";

export default axiosFundacion.create({
    baseURL: 'https://intranet-api-aoity.ondigitalocean.app/api/',
    headers:{
        'Content-type'                : 'application/json',
 
        
    }
})