import axios from 'axios';

const baseURL = 'https://intranet-api-aoity.ondigitalocean.app/kiosco/';

export default axios.create({
    baseURL,
});



