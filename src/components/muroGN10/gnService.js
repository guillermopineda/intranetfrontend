import Service from './Service';


export default{
    getMuro(tipo){
        return Service.get(tipo)
    }
    
}