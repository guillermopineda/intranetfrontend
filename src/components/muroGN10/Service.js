import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/api/comunicados/';

export default axios.create({
    baseURL,
});