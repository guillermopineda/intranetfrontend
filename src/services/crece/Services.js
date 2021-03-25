import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/vacantes/';

export default axios.create({
    baseURL,
});
