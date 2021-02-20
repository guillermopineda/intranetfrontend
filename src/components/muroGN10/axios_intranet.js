import axios from "axios";

export default axios.create({
    baseURL: "https://intranet-api-aoity.ondigitalocean.app/",
    headers:{
        "Content-type":"application/json"
    }
})