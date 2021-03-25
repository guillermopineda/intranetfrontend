import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/empleados/';

export default axios.create({
    baseURL,
});
