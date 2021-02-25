import apiCapital from "./axios_capital24";


class ServicioCapital24{
    async getComunicados(){
        const pathMuro = `GYXFPwXvzD28j0ma/idapp?idtipobeneficio=2&idestado=15&mapa=true/`;
        const response = await apiCapital.get(pathMuro)
        console.log(response);
        return response.data;
    }
}

export default new ServicioCapital24();