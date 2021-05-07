import axios from 'axios';
import Cookies from 'js-cookie';

const API_KEY=process.env.VUE_APP_KEY;

const baseURL = `${API_KEY}comunicados/`;

export default axios.create({
    baseURL,
    headers:{
        "Authorization": Cookies.get("token"),
        "X-CSRFToken" : Cookies.get("csrf")
    }
    
},
axios.defaults.xsrfHeaderName = "X-CSRFToken",
axios.defaults.xsrfCookieName = "csrftoken"
);

