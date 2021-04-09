import axios from 'axios';

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/comunicados/';

export default axios.create({
    baseURL,
});



