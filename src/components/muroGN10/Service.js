import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/comunicados/';

export default axios.create({
    baseURL,
});
