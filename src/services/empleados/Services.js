import axios from 'axios';

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/empleados/';

export default axios.create({
    baseURL,
});
