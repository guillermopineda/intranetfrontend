import axios from 'axios';

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/unidad-de-negocio/';

export default axios.create({
    baseURL,
});
