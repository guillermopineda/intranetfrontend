import apiFundacion from "./axios_fundacion";


class ServicioFundacion{
    async getFundacion(){
        const pathFundacion = `comunicados/fundacion/`;
        const response = await apiFundacion.get(pathFundacion)
        console.log(response);
        return response.data;
    }
}

export default new ServicioFundacion();