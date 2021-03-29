import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/empleados/unidad-de-negocio/';

export default axios.create({
    baseURL,
});
