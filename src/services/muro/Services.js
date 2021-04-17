import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/comunicados/';

export default axios.create({
    baseURL,
    headers:{
        "Authorization": Cookies.get("token")
    }
});



