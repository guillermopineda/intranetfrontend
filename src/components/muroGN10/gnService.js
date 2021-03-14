import Service from './Service';


export default{
    getMuro(tipo,lista){
        return Service.get(tipo,lista)
    }
}