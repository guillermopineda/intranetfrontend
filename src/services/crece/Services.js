import axios from 'axios';

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/vacantes/';

export default axios.create({
    baseURL,
});
