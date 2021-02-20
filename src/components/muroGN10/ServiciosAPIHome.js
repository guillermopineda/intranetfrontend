import api from "./axios";


class ServicioAPIHome{
    async getComunicados(){
        const cadena_inicio = `inicio/`;
        const response = await api.get(cadena_inicio)
        console.log(response);
        return response.data;
    }
}

export default new ServicioAPIHome();