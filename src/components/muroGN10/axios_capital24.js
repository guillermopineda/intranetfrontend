import axiosCapital from "axios";

export default axiosCapital.create({
    baseURL: "https://tdu.digital/api/comercios/",
    headers:{
        "Content-type":"application/json",
    }
})